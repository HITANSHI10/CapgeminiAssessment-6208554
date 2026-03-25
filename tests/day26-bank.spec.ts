//Bank Server
import {test,expect} from "@playwright/test"
import path from "path"
import fs from "fs"
import openAccount from "../page object model/BankServer/openAccount.page.ts"
import CreateCustomer from "../page object model/BankServer/addnew.page.ts"
import data1 from "../testdata/AddCustomerData.json"
import Withdraw from "../page object model/BankServer/Withraw.page.ts"
const fullName = `${data1.FirstName.trim()} ${data1.LastName.trim()}`;

const urldata=fs.readFileSync(path.join(__dirname,"../testdata/data6.json"),"utf-8")
const data=JSON.parse(urldata)

test("E2E",async({page})=>{
    await page.goto(data.url)
    const Createcustomer = new CreateCustomer(page)
    await Createcustomer.addNewCustomer()
    const OpenAccount1= new openAccount(page)
    await OpenAccount1.OpenAccount(fullName, data1.Currency)
    const WithdrawDeposit = new Withdraw(page)
    await WithdrawDeposit.deposit(fullName)
    await WithdrawDeposit.withdraww
    await WithdrawDeposit.logout
})