import {Page,Locator,expect} from "@playwright/test"
import path from "path"
import fs from "fs"
import data from "../../testdata/AddCustomerData.json"


class openAccount{
    OpenAccountButton:Locator
    Customer:Locator
    Currency:Locator
    ProcessButton:Locator
    HomeButton:Locator

    constructor(Page){
        this.page=Page
        this.OpenAccountButton=Page.getByText('Open Account')
        this.Customer=Page.locator('#userSelect')
        this.Currency=Page.locator('#currency')
        this.ProcessButton=Page.getByText('Process')
        this.HomeButton=Page.getByText('Home')
    }

    async OpenAccount(fullName:string , Currency:string){
         this.page.once('dialog', async dialog => {
            console.log("Alert:", dialog.message())
            expect(dialog.message()).toContain("Account created successfully");
            await dialog.accept();
        });
        await this.OpenAccountButton.click()
        console.log("Customer name:", fullName);
        await this.Customer.waitFor();
        await this.Customer.selectOption({label : fullName})
        await this.Currency.selectOption({label : data.Currency})
        await this.ProcessButton.click()
        await this.HomeButton.click()
    }

}

export default openAccount