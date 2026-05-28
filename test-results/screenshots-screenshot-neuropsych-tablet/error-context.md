# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.ts >> screenshot neuropsych
- Location: tests/screenshots.spec.ts:14:7

# Error details

```
Error: Channel closed
```

```
Error: page.screenshot: Test ended.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

```

# Page snapshot

```yaml
- main [ref=e7]:
  - generic [ref=e10]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - img "Grafana" [ref=e14]
        - heading "Welcome to Grafana" [level=1] [ref=e16]
      - generic [ref=e20]:
        - generic [ref=e21]:
          - generic [ref=e24]: Email or username
          - textbox "Email or username" [active] [ref=e29]:
            - /placeholder: email or username
        - generic [ref=e30]:
          - generic [ref=e33]: Password
          - generic [ref=e37]:
            - textbox "Password" [ref=e38]:
              - /placeholder: password
            - switch "Show password" [ref=e40] [cursor=pointer]:
              - img [ref=e41]
        - button "Log in" [ref=e43] [cursor=pointer]:
          - generic [ref=e44]: Log in
        - link "Forgot your password?" [ref=e46] [cursor=pointer]:
          - /url: /user/password/send-reset-email
          - generic [ref=e47]: Forgot your password?
    - text: "| | | | |"
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
  15 |     await pw.goto(page.url, { waitUntil: "networkidle" });
  16 |     const width = viewport?.width ?? 1440;
  17 |     const outDir = path.join(process.cwd(), "screenshots");
> 18 |     await pw.screenshot({
     |              ^ Error: page.screenshot: Test ended.
  19 |       path: path.join(outDir, `${page.name}-${width}.png`),
  20 |       fullPage: true,
  21 |     });
  22 |   });
  23 | }
  24 | 
```