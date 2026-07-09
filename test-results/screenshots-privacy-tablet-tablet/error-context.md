# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.ts >> privacy-tablet
- Location: e2e/screenshots.spec.ts:13:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - link "Back to home" [ref=e4] [cursor=pointer]:
        - /url: /
        - img [ref=e5]
        - text: Back to home
      - heading "Privacy Policy" [level=1] [ref=e7]
      - generic [ref=e8]:
        - paragraph [ref=e9]: Comprehensive Psychological Services (“CPS,” “we,” or “us”) respects your privacy. This policy explains how we handle information collected through this website. It does not replace the notices you receive as a patient regarding protected health information.
        - heading "Information we collect" [level=2] [ref=e10]
        - paragraph [ref=e11]: When you submit an appointment request, we collect the name, email address, phone number, preferred location, and any message you provide, so we can respond to your request.
        - heading "How we use your information" [level=2] [ref=e12]
        - paragraph [ref=e13]: We use the information you submit solely to contact you about care, schedule appointments, and respond to your inquiries. We do not sell your personal information.
        - heading "Protected health information" [level=2] [ref=e14]
        - paragraph [ref=e15]: Please do not include sensitive medical details in the website form. Detailed clinical information is gathered securely once care begins, consistent with applicable privacy laws.
        - heading "Contact" [level=2] [ref=e16]
        - paragraph [ref=e17]: For privacy questions, email wecanhelpout@gmail.com or call 801-483-1600.
      - paragraph [ref=e19]:
        - text: Questions about this policy? Contact Comprehensive Psychological Services at
        - link "wecanhelpout@gmail.com" [ref=e20] [cursor=pointer]:
          - /url: mailto:wecanhelpout@gmail.com
        - text: or call
        - link "801-483-1600" [ref=e21] [cursor=pointer]:
          - /url: tel:+18014831600
          - img [ref=e22]
          - text: 801-483-1600
        - text: .
  - button "Open Next.js Dev Tools" [ref=e29] [cursor=pointer]:
    - img [ref=e30]
  - alert [ref=e33]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const pages = [
  4  |   { name: "homepage", path: "/" },
  5  |   { name: "services-counseling", path: "/services/counseling-psychotherapy" },
  6  |   { name: "service-area", path: "/service-area" },
  7  |   { name: "privacy", path: "/privacy" },
  8  |   { name: "utah-salt-lake-city", path: "/utah/salt-lake-city" },
  9  | ];
  10 | 
  11 | for (const page of pages) {
  12 |   for (const device of ["mobile", "tablet", "desktop"]) {
  13 |     test(`${page.name}-${device}`, async ({ page: p }) => {
  14 |       await p.setViewportSize(
  15 |         device === "mobile"
  16 |           ? { width: 375, height: 812 }
  17 |           : device === "tablet"
  18 |           ? { width: 768, height: 1024 }
  19 |           : { width: 1440, height: 900 }
  20 |       );
  21 |       await p.goto(page.path);
> 22 |       await p.waitForLoadState("networkidle");
     |               ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  23 |       // Check no console errors
  24 |       const errors: string[] = [];
  25 |       p.on("console", (msg) => {
  26 |         if (msg.type() === "error") errors.push(msg.text());
  27 |       });
  28 |       await p.waitForTimeout(1000);
  29 |       expect(errors.filter(e => !e.includes("favicon"))).toHaveLength(0);
  30 |     });
  31 |   }
  32 | }
  33 | 
```