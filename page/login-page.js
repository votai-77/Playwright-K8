const { config } = require("../data/config");

class LoginPage {
  constructor(page) {
    this.page = page;

    this.edt_userName = this.page.locator('//*[@id="email"]');
    this.edt_passWord = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/div[1]/div/div[3]/form/div[2]/div/div/input'
    );
    this.btn_login = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/div[1]/div/div[3]/form/button'
    );
  }

  async navigation() {
    await this.page.goto(config.url);
  }
  async loginPage() {
    await this.edt_userName.fill(config.email);
    await this.edt_passWord.fill(config.password);
    await this.btn_login.click();
  }
}
module.exports = LoginPage;
