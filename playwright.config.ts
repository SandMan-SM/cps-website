import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:3000",
  },
  projects: [
    {
      name: "mobile",
      use: { ...devices["iPhone SE"], viewport: { width: 375, height: 812 } },
    },
    {
      name: "tablet",
      use: { ...devices["iPad Mini"], viewport: { width: 768, height: 1024 } },
    },
    {
      name: "desktop",
      use: { viewport: { width: 1440, height: 900 } },
    },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
