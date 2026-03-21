import { Page, Locator, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const login_data = fs.readFileSync(path.join(__dirname, "../Utility/signupdata.json"),"utf-8");
const data = JSON.parse(login_data);

class Signupp {
  signupbutton: Locator;
  usernameS: Locator;
  passwordS: Locator;
  submitButton: Locator;

  constructor(page: Page) {
    this.signupbutton = page.locator('button#register_button');
    this.usernameS = page.locator('[name="register_username"]');
    this.passwordS = page.locator('[name="register_password"]');
    this.submitButton = page.locator('button.btn.btn-block:has-text("Sign Up")');
  }

  async signup(data: {username:string; password:string}) {
    await this.signupbutton.click();
    await this.usernameS.waitFor({ state: 'visible' });
    await this.usernameS.fill(data.username);
    await this.passwordS.fill(data.password); // ensure JSON key matches
    await this.submitButton.click();
  }
}

export default Signupp