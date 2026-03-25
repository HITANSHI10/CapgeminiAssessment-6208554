import {Locator, Page,expect} from "@playwright/test"
import path from "path"
import fs from "fs"

const searchData=fs.readFileSync(path.join(__dirname,"../Utility/searchfile.json"),"utf-8")
const data_book=JSON.parse(searchData)

class Searchh{
    searchBar:Locator

    constructor(page) {
        this.searchBar=page.getByPlaceholder('Search for a Book , Author Or Category')
    }

    async Search( query: string ){
        await this.searchBar.fill(query)
        await this.searchBar.press("Enter");
    }
}

export default Searchh