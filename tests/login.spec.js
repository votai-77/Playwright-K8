import { test } from "@playwright/test";

test("Go to the website Friendify AI", async ({ page }) => {
  await test.step("Access to link friendify", async () => {
    await page.goto("https://friendify.ai/");
  });
  await test.step("Navigation to login screen ", async () => {
    {
      await page
        .locator('//*[@id="__next"]/div/header/div/div[2]/div[1]/p')
        .click();
    }
  });
  await test.step("");
});
