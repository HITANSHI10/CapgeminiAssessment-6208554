import {Page,Locator,expect} from "@playwright/test"
import path from "path"
import fs from "fs"
const AddCustomerData=fs.readFileSync(path.join(__dirname,"../../testdata/AddCustomerData.json"),"utf-8")
const data=JSON.parse(AddCustomerData)

class CreateCustomer{
    BankManagerLogin:Locator
    CustomerLogin:Locator
    AddCustomerButton:Locator
    OpenAccountButton:Locator
    firstName:Locator
    LastName:Locator
    PostalCode:Locator
    SubmitCustomer:Locator

    constructor(Page){
        this.page=Page
        this.BankManagerLogin=Page.getByText('Bank Manager Login')
        this.CustomerLogin=Page.getByText('Customer Login')
        this.AddCustomerButton=Page.getByText('Add Customer')
        this.OpenAccountButton=Page.getByText('Open Account')
        this.firstName=Page.getByPlaceholder('First Name')
        this.LastName=Page.getByPlaceholder('Last Name')
        this.PostalCode=Page.getByPlaceholder('Post Code')
        this.SubmitCustomer=Page.locator("form").getByText('Add Customer')
    }

    async addNewCustomer(){
        this.page.once('dialog', async dialog => {
            console.log("Alert:", dialog.message())
            expect(dialog.message()).toContain("Customer added successfully");
            await dialog.accept();
        });
        await this.BankManagerLogin.click()
        await this.AddCustomerButton.click()
        await this.firstName.fill(data.FirstName)
        await this.LastName.fill(data.LastName)
        await this.PostalCode.fill(data.PostalCode)
        await this.SubmitCustomer.click()
    }

}

export default CreateCustomer