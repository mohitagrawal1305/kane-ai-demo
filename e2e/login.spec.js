import { test, expect } from '@playwright/test';

test('Login and increment counter', async ({ page }) => {
  // Navigate to the base URL
  await page.goto('/');
  
  // Wait for the form to be visible
  await page.waitForSelector('input[placeholder="Username"]');
  
  // Fill in the login form
  await page.fill('input[placeholder="Username"]', 'admin');
  await page.fill('input[placeholder="Password"]', 'password');
  await page.click('text=Login');
  
  // Wait for the welcome message to confirm login
  await page.waitForSelector('text=Welcome!');
  
  // Click increment and verify counter
  await page.click('text=Increment');
  await expect(page.locator('text=Counter: 1')).toBeVisible();
});
