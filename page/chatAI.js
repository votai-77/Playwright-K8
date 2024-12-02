const { config } = require("../data/config");
const LoginPage = require("./login-page");

class ChatAI extends LoginPage {
  constructor(page) {
    this.page = page;

    this.input = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div[3]/div/div[1]/div/form/div/textarea'
    );
    this.btn_send = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div[3]/div/div[1]/div/form/div/button/div'
    );
    this.result_chat = this.page.locator(
      '//*[@id="__next"]/div[1]/div/div/div/main/div/div[2]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div/div'
    );
  }
  async typeChatAI() {
    this.input.fill(config.input_data);
    this.btn_send.click();
    const result = this.result_chat.innerText();
    console.log("Result: ", result);
  }
}
module.exports = ChatAI;
