import { test, expect } from '@playwright/test';
import Signinn from "../PageObjectModel/Signin.page.ts"
import fs from "fs"
import path from "path"
const JsonUrl=fs.readFileSync(path.join(__dirname,"../Utility/data.json"),'utf-8')
const url=JSON.parse(JsonUrl)
const signinJson = fs.readFileSync(path.join(__dirname, "../Utility/signindata.json"), "utf-8")
const data3 = JSON.parse(signinJson)

test('BookShop Login', async ({ page }) => {
    await page.goto(url.url)
    const SigninPage = new Signinn(page)
    await SigninPage.signin(data3)
})