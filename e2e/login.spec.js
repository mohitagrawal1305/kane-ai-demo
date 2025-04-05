import { test, expect } from '@playwright/test';

test('Login and increment counter', async ({ page, baseURL }) => {
  // Log the current base URL being used
  console.log('Current base URL:', baseURL);
  
  // Navigate to the base URL and log the full URL
  await page.goto('/');
  console.log('Current page URL:', page.url());
  
  // Wait for the form to be visible and log its presence
  const usernameInput = await page.waitForSelector('input[placeholder="Username"]');
  console.log('Username input found:', await usernameInput.isVisible());
  
  // Fill in the login form
  await page.fill('input[placeholder="Username"]', 'admin');
  await page.fill('input[placeholder="Password"]', 'password');
  await page.click('text=Login');
  
  // Wait for the welcome message to confirm login
  const welcomeMessage = await page.waitForSelector('text=Welcome!');
  console.log('Welcome message found:', await welcomeMessage.isVisible());
  
  // Click increment and verify counter
  await page.click('text=Increment');
  const counter = await page.locator('text=Counter: 1');
  await expect(counter).toBeVisible();
  console.log('Counter found:', await counter.isVisible());
});
