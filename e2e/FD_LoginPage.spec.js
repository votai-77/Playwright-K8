import { chromium, test } from "@playwright/test";
import { LoginPage } from "../page/login-page";
import ChatAI from "../page/chatAI";

let browsers;
let page;
let login;

test.beforeEach(async () => {
  browsers = await chromium.launch();
  page = await browsers.newPage();

  //Login
  login = new LoginPage(page);
  const chat_AI = new ChatAI(page);
});

test.afterEach(async () => {
  await page.close();
  await browsers.close();
});

test("Login screen", async ({ page }) => {
  await login.navigation();
  await login.loginPage();
  await chat_AI.typeChatAI();
});
