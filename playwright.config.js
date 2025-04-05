import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30 * 1000,
  use: {
    headless: true,
    baseURL: process.env.BASE_URL || "http://localhost:5173",
  },
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
});
