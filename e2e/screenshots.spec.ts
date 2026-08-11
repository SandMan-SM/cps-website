import { test, expect } from "@playwright/test";

const pages = [
  { name: "homepage", path: "/" },
  { name: "services-counseling", path: "/services/counseling-psychotherapy" },
  { name: "service-area", path: "/service-area" },
  { name: "privacy", path: "/privacy" },
  { name: "utah-salt-lake-city", path: "/utah/salt-lake-city" },
];

for (const page of pages) {
  for (const device of ["mobile", "tablet", "desktop"]) {
    test(`${page.name}-${device}`, async ({ page: p }) => {
      await p.setViewportSize(
        device === "mobile"
          ? { width: 375, height: 812 }
          : device === "tablet"
          ? { width: 768, height: 1024 }
          : { width: 1440, height: 900 }
      );
      const errors: string[] = [];
      const listener = (msg: { type: () => string; text: () => string }) => {
        if (msg.type() === "error") errors.push(msg.text());
      };
      p.on("console", listener);
      await p.goto(page.path);
      await p.waitForLoadState("domcontentloaded");
      await p.waitForTimeout(2000);
      p.off("console", listener);
      expect(errors.filter(e => !e.includes("favicon") && !e.includes("404") && !e.includes("net::ERR"))).toHaveLength(0);
    });
  }
}
