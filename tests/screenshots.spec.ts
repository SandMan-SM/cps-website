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
    // Use 'load' instead of 'networkidle' — Google Maps iframes keep
    // persistent connections open so networkidle never settles.
    await pw.goto(page.url, { waitUntil: "load", timeout: 45000 });
    const width = viewport?.width ?? 1440;
    const outDir = path.join(process.cwd(), "screenshots");
    await pw.screenshot({
      path: path.join(outDir, `${page.name}-${width}.png`),
      fullPage: true,
    });
  });
}
