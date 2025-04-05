import { test, expect } from '@playwright/test';

test('Login and increment counter', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[placeholder="Username"]', 'admin');
  await page.fill('input[placeholder="Password"]', 'password');
  await page.click('text=Login');
  await page.click('text=Increment');
  await expect(page.locator('p')).toHaveText('Counter: 1');
});
