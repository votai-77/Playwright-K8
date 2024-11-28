import { test } from '@playwright/test';

test('Go to the website Friendify AI', async ({ page }) => {
    await test.step('Access to link friendify', async () => {
        await page.goto("https://friendify.ai/");
    });
})