import {Page,Locator,expect} from "@playwright/test"

class Authors{
    JkRowling:Locator
    BookHarryPotter:Locator
    Add_to_Cart:Locator
    Place_Order:Locator
    Do_some_shopping:Locator

    constructor(page:Page){
        this.page=page
        this.JkRowling=page.locator('//img[@class="img-responsive center-block" and @src="img/popular-author/6.jpg"]')
        this.BookHarryPotter=page.locator('//img[@src="img/books/LIT-33.jpg"]')
        this.Add_to_Cart=page.locator('//a[@id="buyLink"]')
        this.Place_Order=page.locator('//a[text()="Place Order"]')
        this.Do_some_shopping=page.locator('//a[text()="Do Some Shopping"]')
    }

    async AuthorBook(){
            this.page.on('dialog', async dialog => {
            console.log("Alert:", dialog.message())
            expect(dialog.message()).toContain("Order SuccessFully Placed");
            await dialog.accept();
        });

        await this.JkRowling.click()
        await this.BookHarryPotter.click()
        await this.Add_to_Cart.click()
        await this.Place_Order.click()
        await this.page.on('dialog', async dialog => {
        console.log(dialog.message());  
        await dialog.accept();         
        });
        await this.Do_some_shopping.click()
    }
}

export default Authors