import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30 * 1000,
  use: {
    headless: true,
    baseURL: 'http://localhost:5173',
  },
});
