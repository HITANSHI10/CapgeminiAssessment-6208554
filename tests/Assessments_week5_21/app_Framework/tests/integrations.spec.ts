import { test, expect } from "@playwright/test"
import path from "path"
import fs from "fs"
import Searchh from "../PageObjectModel/SearchBar.page.ts"
import Signupp from "../PageObjectModel/Signup.page.ts"
import Signinn from "../PageObjectModel/Signin.page.ts"
import Add_To_Cart from "../PageObjectModel/addToCart.page.ts"
import Authors from "../PageObjectModel/author.page.ts"

const JsonUrl = fs.readFileSync(path.join(__dirname,"../Utility/data.json"), 'utf-8')
const url = JSON.parse(JsonUrl)

const SignUp = fs.readFileSync(path.join(__dirname,"../Utility/signupdata.json"), 'utf-8')
const user1 = JSON.parse(SignUp)

const SignIn = fs.readFileSync(path.join(__dirname,"../Utility/signindata.json"), 'utf-8')
const user1_login = JSON.parse(SignIn)

const SearchBook = fs.readFileSync(path.join(__dirname,"../Utility/searchfile.json"), 'utf-8')
const Books = JSON.parse(SearchBook)

test("Full Integration: Signup, Signin, Search, Add to Cart, Author Book Order", async ({ page }) => {
    await page.goto(url.url)
    const SignupPage = new Signupp(page)
    await SignupPage.signup(user1)
    const SigninPage = new Signinn(page)
    await SigninPage.signin(user1_login)
    const searchPage = new Searchh(page)
    const cartPage = new Add_To_Cart(page)
    await searchPage.Search(Books.book1)
    await cartPage.Add_To_Cart1()
    const authorPage = new Authors(page)
    await authorPage.AuthorBook()
})