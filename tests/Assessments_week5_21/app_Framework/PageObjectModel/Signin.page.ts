import {Page,Locator,expect} from "@playwright/test"
import path from "path"
import fs from "fs"

const signin_data=fs.readFileSync(path.join(__dirname,"../Utility/signindata.json"),"utf-8");
const data2= JSON.parse(signin_data)

class Signinn{
    loginbutton:any
    usernameL:string
    passwordL:string
    SigninButton:any

    constructor(page){
        this.loginbutton=page.locator(' //button[@id="login_button"]')
        this.usernameL=page.locator(' //input[@name="login_username"]')
        this.passwordL=page.locator(' //input[@name="login_password"]')
        this.SigninButton=page.locator(' //button[normalize-space(text())="Sign in"]')
    }

    async signin(data: {username:string; password:string}) {
    await this.loginbutton.click();
    await this.usernameL.waitFor({ state: 'visible' });
    await this.usernameL.fill(data.username);
    await this.passwordL.fill(data.password); 
    await this.SigninButton.click();
  }
}

export default Signinn