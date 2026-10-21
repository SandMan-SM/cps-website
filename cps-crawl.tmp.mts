import { chromium } from "@playwright/test";

const BASE = "http://localhost:3005";

const res0 = await fetch(BASE + "/sitemap.xml");
const xml = await res0.text();
const urls: string[] = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).map((u) => u.replace("https://cpsutah.org", ""));
console.log(`crawling ${urls.length} urls`);

const browser = await chromium.launch();
const ctx = await browser.newContext();
const p = await ctx.newPage();

const broken: string[] = [];
const meta: string[] = [];
const a11y: string[] = [];
const internalTargets = new Set<string>();

for (const path of urls) {
  const r = await ctx.request.get(BASE + path);
  if (r.status() >= 400) {
    broken.push(`${r.status()} ${path}`);
    continue;
  }
  const resp = await p.goto(BASE + path, { waitUntil: "domcontentloaded" });
  if (!resp) continue;

  const t = await p.title();
  if (!t) meta.push(`${path}: no title`);
  const d = await p.getAttribute('meta[name="description"]', "content");
  if (!d) meta.push(`${path}: no meta description`);
  if (!(await p.locator('link[rel="canonical"]').count())) meta.push(`${path}: no canonical`);
  if (!(await p.locator('meta[property="og:title"]').count())) meta.push(`${path}: no og:title`);
  if (!(await p.locator('meta[property="og:image"]').count())) meta.push(`${path}: no og:image`);
  if (!(await p.locator('meta[name="twitter:card"]').count())) meta.push(`${path}: no twitter:card`);
  const h1 = await p.locator("h1").count();
  if (h1 !== 1) meta.push(`${path}: h1 count=${h1}`);

  // json-ld validity
  const ld = await p.evaluate(() =>
    Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((s) => s.textContent || "")
  );
  for (const raw of ld) {
    try {
      const j = JSON.parse(raw);
      const items = Array.isArray(j) ? j : j["@graph"] ? j["@graph"] : [j];
      for (const it of items) {
        if (it && !it["@type"]) a11y.push(`${path}: JSON-LD node missing @type`);
        if (it && it["@type"] && !it.url) { /* optional */ }
      }
    } catch {
      meta.push(`${path}: INVALID JSON-LD`);
    }
  }

  // unlabeled interactive
  const unlabeled = await p.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLElement>("a,button").forEach((el) => {
      const text = (el.textContent || "").trim();
      const aria = el.getAttribute("aria-label");
      const title = el.getAttribute("title");
      const lb = el.getAttribute("aria-labelledby");
      const imgAlt = el.querySelector("img")?.getAttribute("alt");
      if (!text && !aria && !title && !lb && !imgAlt) out.push(el.tagName + "|" + el.className.toString().slice(0, 50));
    });
    return out;
  });
  unlabeled.forEach((s) => a11y.push(`${path}: unlabeled ${s}`));

  const imgNoAlt = await p.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLImageElement>("img").forEach((el) => {
      if (el.getAttribute("alt") === null) out.push(el.getAttribute("src") || "?");
    });
    return out;
  });
  imgNoAlt.forEach((s) => a11y.push(`${path}: img alt attribute absent ${s}`));

  const fieldNoLabel = await p.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLInputElement>("input:not([type=hidden]):not([type=submit]):not([type=button]),textarea,select").forEach((el) => {
      const id = el.id;
      const has = id && document.querySelector(`label[for="${id}"]`);
      const wrapped = el.closest("label");
      const aria = el.getAttribute("aria-label") || el.getAttribute("aria-labelledby");
      if (!has && !wrapped && !aria) out.push(el.tagName + "#" + (id || el.getAttribute("name") || "?"));
    });
    return out;
  });
  fieldNoLabel.forEach((s) => a11y.push(`${path}: field no label ${s}`));

  // internal link targets
  const hrefs = await p.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]")).map((a) => a.getAttribute("href") || "")
  );
  for (const h of hrefs) {
    if (!h.startsWith("/")) continue;
    const clean = h.split("#")[0].split("?")[0];
    if (clean) internalTargets.add(clean);
  }
}

// verify every internal target
for (const t of internalTargets) {
  const r = await ctx.request.get(BASE + t, { maxRedirects: 0 });
  if (r.status() >= 400) broken.push(`${r.status()} ${t} (internal target)`);
}

// check redirect from /services/...
const redir = await ctx.request.get(BASE + "/services/counseling-psychotherapy", { maxRedirects: 0 });
console.log(`\n/services/ redirect status: ${redir.status()} -> ${redir.headers()["location"]}`);

console.log("\n=== BROKEN (" + broken.length + ") ===");
console.log(broken.length ? [...new Set(broken)].join("\n") : "none");
console.log("\n=== META (" + meta.length + ") ===");
console.log(meta.length ? [...new Set(meta)].join("\n") : "none");
console.log("\n=== A11Y (" + a11y.length + ") ===");
console.log(a11y.length ? [...new Set(a11y)].join("\n") : "none");

await browser.close();
