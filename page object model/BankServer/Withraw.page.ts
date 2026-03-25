import {Page,Locator,expect} from "@playwright/test"
import path from "path"
import fs from "fs"
import data from "../../testdata/AddCustomerData.json"
import data1 from "../../testdata/Amount.json"

class Withdraw{
    CustomerLogin:Locator
    Dropdown:Locator
    LoginButton:Locator
    DepositAmount:Locator
    DepositMoney:Locator
    DepositButton:Locator
    WithdrawAmount:Locator
    WithdrawMoney:Locator
    WithdrawButton:Locator
    message:Locator
    LogoutButton:Locator

    constructor(Page){
        this.page = Page
        this.CustomerLogin=Page.getByText('Customer Login')
        this.Dropdown = Page.locator('#userSelect')
        this.LoginButton=Page.getByText('Login')
        this.DepositAmount=Page.getByText('Deposit')
        this.DepositMoney = Page.getByPlaceholder('amount')
        this.DepositButton = Page.locator('button[type="submit"]:has-text("Deposit")')
        this.WithdrawAmount=Page.getByText('Withdrawl')
        this.WithdrawMoney=Page.getByPlaceholder('Amount')
        this.WithdrawButton=Page.locator('button[type="submit"]:has-text("Withdraw")')
        this.message=this.page.locator('.error')
        this.LogoutButton=Page.getByText('Logout')
    }

    async deposit(fullName:string){
        await this.CustomerLogin.click()
        await this.Dropdown.selectOption({label : fullName})
        await this.LoginButton.click()
        await this.DepositAmount.click()
        await this.DepositMoney.fill(data1.Deposit)
        await this.DepositButton.click()
        await expect(this.message).toHaveText('Deposit Successful');
    }

    async withdraww(){
        await this.WithdrawAmount.click()
        await this.WithdrawMoney.fill(data1.Withdraw)
        await this.WithdrawButton.click()
        await expect(this.message).toHaveText('Transaction successful');
    }

    async logout(){
        await this.LogoutButton.click()
    }
}

export default Withdraw