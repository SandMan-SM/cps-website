import { chromium } from "@playwright/test";

const BASE = "http://localhost:3005";

const PAGES = [
  "/", "/blog", "/booknow", "/privacy", "/terms", "/service-area",
  "/services/counseling-psychotherapy", "/solutions/mental-health-counseling",
  "/utah/salt-lake-city",
];

const browser = await chromium.launch();
const ctx = await browser.newContext();
const p = await ctx.newPage();

const linkIssues: string[] = [];
const a11yIssues: string[] = [];
const metaIssues: string[] = [];
const checked = new Set<string>();

for (const path of PAGES) {
  const res = await p.goto(BASE + path, { waitUntil: "domcontentloaded" });
  if (!res || res.status() >= 400) {
    linkIssues.push(`PAGE ${res?.status()} ${path}`);
    continue;
  }

  // meta
  const title = await p.title();
  if (!title || title.length < 10) metaIssues.push(`${path}: title weak (${title})`);
  const desc = await p.getAttribute('meta[name="description"]', "content");
  if (!desc) metaIssues.push(`${path}: missing meta description`);
  const canon = await p.locator('link[rel="canonical"]').count();
  if (!canon) metaIssues.push(`${path}: missing canonical`);
  const ogTitle = await p.locator('meta[property="og:title"]').count();
  if (!ogTitle) metaIssues.push(`${path}: missing og:title`);
  const twCard = await p.locator('meta[name="twitter:card"]').count();
  if (!twCard) metaIssues.push(`${path}: missing twitter:card`);
  const viewport = await p.locator('meta[name="viewport"]').count();
  if (!viewport) metaIssues.push(`${path}: missing viewport`);
  const h1 = await p.locator("h1").count();
  if (h1 !== 1) metaIssues.push(`${path}: h1 count = ${h1}`);

  // aria / a11y
  const noLabel = await p.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLElement>("a,button").forEach((el) => {
      const text = (el.textContent || "").trim();
      const aria = el.getAttribute("aria-label");
      const title = el.getAttribute("title");
      const labelledby = el.getAttribute("aria-labelledby");
      const imgAlt = el.querySelector("img")?.getAttribute("alt");
      if (!text && !aria && !title && !labelledby && !imgAlt) {
        out.push(el.tagName + ":" + (el.className || "").toString().slice(0, 60));
      }
    });
    return out;
  });
  noLabel.forEach((s) => a11yIssues.push(`${path}: unlabeled ${s}`));

  const noAlt = await p.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLImageElement>("img").forEach((el) => {
      if (!el.getAttribute("alt")) out.push(el.getAttribute("src") || "?");
    });
    return out;
  });
  noAlt.forEach((s) => a11yIssues.push(`${path}: img missing alt ${s}`));

  const noLabelFor = await p.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLInputElement>("input:not([type=hidden]),textarea,select").forEach((el) => {
      const id = el.id;
      const hasLabel = id && document.querySelector(`label[for="${id}"]`);
      const wrapped = el.closest("label");
      const aria = el.getAttribute("aria-label") || el.getAttribute("aria-labelledby");
      if (!hasLabel && !wrapped && !aria) out.push(el.tagName + "#" + (id || el.getAttribute("name") || "?"));
    });
    return out;
  });
  noLabelFor.forEach((s) => a11yIssues.push(`${path}: form field no label ${s}`));

  const emptyLinks = await p.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((el) => {
      const href = el.getAttribute("href") || "";
      if (href.trim() === "" || href === "#") out.push(el.textContent?.trim().slice(0, 40) || "(no text)");
    });
    return out;
  });
  emptyLinks.forEach((s) => a11yIssues.push(`${path}: empty href link "${s}"`));

  // collect internal links
  const hrefs = await p.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"))
      .map((a) => a.getAttribute("href") || "")
      .filter((h) => h.startsWith("/"))
  );
  for (const h of hrefs) {
    const clean = h.split("#")[0].split("?")[0];
    if (!clean || checked.has(clean)) continue;
    checked.add(clean);
    const r = await ctx.request.get(BASE + clean);
    if (r.status() >= 400) linkIssues.push(`${r.status()} ${clean} (found on ${path})`);
  }
}

// external link sanity
const ext = await p.evaluate(() =>
  Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href^='http']")).map((a) => a.getAttribute("href") || "")
);
console.log("=== EXTERNAL LINKS ===");
console.log(ext.join("\n"));
console.log("\n=== BROKEN LINKS ===");
console.log(linkIssues.length ? linkIssues.join("\n") : "none");
console.log("\n=== A11Y ===");
console.log(a11yIssues.length ? [...new Set(a11yIssues)].join("\n") : "none");
console.log("\n=== META ===");
console.log(metaIssues.length ? metaIssues.join("\n") : "none");

await browser.close();
