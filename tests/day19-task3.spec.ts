import {test} from "@playwright/test"
import path from "path"

test("Upload profile photo",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('//input[@id="file-upload"]').setInputFiles("C:/Assessment/tests/uploadphoto/DSC_9257.JPG.jpeg")
    await page.locator('//input[@id="file-submit"]').click()
})