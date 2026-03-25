import {Page,Locator,expect} from "@playwright/test"

class Add_To_Cart{
    TheIndianEconomy:Locator
    add_To_Cart1:Locator
    Continue_shopping:Locator
    ChetanBhagat:Locator
    add_To_Cart2:Locator
    Place_Order:Locator
    Do_some_shopping:Locator

    constructor(page:Page){
        this.page=page
        this.TheIndianEconomy=page.locator('//img[@class="book block-center img-responsive"]')
        this.add_To_Cart1=page.locator('//a[@class="btn btn-lg btn-danger"]')
        this.Continue_shopping=page.locator('//a[text()="Continue Shopping"]')
        this.ChetanBhagat=page.locator('//img[@class="book block-center img-responsive" and @src="img/books/LIT-1.jpg"]')
        this.add_To_Cart2=page.locator('//a[@class="btn btn-lg btn-danger"]')
        this.Place_Order=page.locator('//a[text()="Place Order"]')
        this.Do_some_shopping=page.locator('//a[text()="Do Some Shopping"]')
    }

    async Add_To_Cart1(){
        await this.TheIndianEconomy.click()
        await this.add_To_Cart1.click()
        await this.Continue_shopping.click()
    }

     async Add_To_Cart2(){
        this.page.on('dialog', async dialog => {
            console.log("Alert:", dialog.message())
            expect(dialog.message()).toContain("Order SuccessFully Placed");
            await dialog.accept();
        }); 
        await this.ChetanBhagat.click()
        await this.add_To_Cart2.click()
        await this.Place_Order.click()
        await this.Do_some_shopping.click()
    }

}

export default Add_To_Cart