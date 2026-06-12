# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.ts >> screenshot neuropsych
- Location: tests/screenshots.spec.ts:14:7

# Error details

```
Error: write EPIPE
```

```
Error: page.goto: Could not connect to the server.
Call log:
  - navigating to "http://localhost:3002/neuropsychologist-near-me", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | import path from "path";
  3  | 
  4  | const pages = [
  5  |   { name: "home", url: "/" },
  6  |   { name: "neuropsych", url: "/neuropsychologist-near-me" },
  7  |   { name: "adhd", url: "/adhd-evaluation-near-me" },
  8  |   { name: "autism", url: "/autism-assessment" },
  9  |   { name: "custody", url: "/custody-evaluator-near-me" },
  10 |   { name: "ketamine", url: "/ketamine-depression-treatment-near-me" },
  11 | ];
  12 | 
  13 | for (const page of pages) {
  14 |   test(`screenshot ${page.name}`, async ({ page: pw, viewport }) => {
> 15 |     await pw.goto(page.url, { waitUntil: "domcontentloaded", timeout: 45000 });
     |              ^ Error: page.goto: Could not connect to the server.
  16 |     const width = viewport?.width ?? 1440;
  17 |     const outDir = path.join(process.cwd(), "screenshots");
  18 |     await pw.screenshot({
  19 |       path: path.join(outDir, `${page.name}-${width}.png`),
  20 |       fullPage: true,
  21 |     });
  22 |   });
  23 | }
  24 | 
```