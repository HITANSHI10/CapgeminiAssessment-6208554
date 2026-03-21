import {test,expect} from "@playwright/test"
import path from "path"
import fs from "fs"
import Signupp from "../PageObjectModel/Signup.page.ts"
import Signinn from "../PageObjectModel/Signin.page.ts"
import Authors from "../PageObjectModel/author.page.ts"

const JsonUrl=fs.readFileSync(path.join(__dirname,"../Utility/data.json"),'utf-8')
const url=JSON.parse(JsonUrl)

const SignUp=fs.readFileSync(path.join(__dirname,"../Utility/signupdata.json"),'utf-8')
const user1=JSON.parse(SignUp)

const SignIn=fs.readFileSync(path.join(__dirname,"../Utility/signindata.json"),'utf-8')
const user1_login=JSON.parse(SignIn)

test("Order Author's Book",async({page})=>{
    await page.goto(url.url)
    const SignupPage = new Signupp(page)
    await SignupPage.signup(user1)
    const SigninPage = new Signinn(page)
    await SigninPage.signin(user1_login)
    const AuthorsPage = new Authors(page)
    await AuthorsPage.AuthorBook()
})

