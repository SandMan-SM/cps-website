import { test } from "@playwright/test";
import path from "path";

const pages = [
  { name: "home", url: "/" },
  { name: "neuropsych", url: "/neuropsychologist-near-me" },
  { name: "adhd", url: "/adhd-evaluation-near-me" },
  { name: "autism", url: "/autism-assessment" },
  { name: "custody", url: "/custody-evaluator-near-me" },
  { name: "ketamine", url: "/ketamine-depression-treatment-near-me" },
];

for (const page of pages) {
  test(`screenshot ${page.name}`, async ({ page: pw, viewport }) => {
    // Use 'load' and wait for images to paint before fullPage capture.
    // Google Maps iframes prevent networkidle, so we use a fixed delay
    // for images to load after DOM is ready.
    await pw.goto(page.url, { waitUntil: "load", timeout: 45000 });
    // Give hero images (next/image priority) time to decode before capture
    await pw.waitForTimeout(2500);
    const width = viewport?.width ?? 1440;
    const outDir = path.join(process.cwd(), "screenshots");
    await pw.screenshot({
      path: path.join(outDir, `${page.name}-${width}.png`),
      fullPage: true,
    });
  });
}
