import {test, expect} from '@playwright/test'

test('selectors Demo', async({page}) => {

    await page.goto('https://www.saucedemo.com/')
   
    //using ant object propery
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator('id=user-name').fill('Chido')
    //using CSS Selector
    //#login-button
    await page.locator('#login-button').click()
    await page.pause()
    //using xpath
    await page.locator('xpath//input[@id="user-name"]').fill('Faraday')
    await page.locator('//input[@id="user-name"]').fill('Ramanujun')
    //using Text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text(LOGIN)').click()

});
