import { defineConfig, devices } from '@playwright/test';

// Common configuration values
const CI = !!process.env.CI;
const LOCAL_URL = 'http://localhost:5173';

export default defineConfig({
  // Test configuration
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 2 : 0,
  workers: CI ? 1 : undefined,
  reporter: 'html',

  // Browser and test options
  use: {
    baseURL: process.env.BASE_URL || LOCAL_URL,
    // Record traces and media only on retry
    trace: 'on-first-retry',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Local development server (disabled in CI)
  webServer: CI ? undefined : {
    command: 'npm run dev',
    url: LOCAL_URL,
    reuseExistingServer: !CI,
  },
}); 