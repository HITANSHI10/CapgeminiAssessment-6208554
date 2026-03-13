import {test} from "@playwright/test"
import path from "path"

test("Upload demoqa profile photo",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    await page.locator('#downloadButton').click()
    await page.locator('#uploadFile').setInputFiles("C:/Users/Dell/Downloads/sampleFile.jpeg")
})