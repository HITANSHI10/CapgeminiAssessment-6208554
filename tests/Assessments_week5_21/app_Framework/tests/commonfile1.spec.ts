import { test, expect } from '@playwright/test';
import Signupp from "../PageObjectModel/Signup.page.ts"
import fs from "fs"
import path from "path"

const JsonUrl=fs.readFileSync(path.join(__dirname,"../Utility/data.json"),'utf-8')
const url=JSON.parse(JsonUrl)

const signupJson = fs.readFileSync(path.join(__dirname, "../Utility/signupdata.json"), "utf-8")
const data1 = JSON.parse(signupJson)

test('BookShop', async ({ page }) => {
    await page.goto(url.url)
    const SignupPage = new Signupp(page)
    for (const user of data1) {
    await SignupPage.signup(user)
    }

})