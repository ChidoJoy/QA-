import {test, expect} from '@playwright/test'

test('Demo Login Test 1', async({page}) => {

    await page.goto('https://demo.applitools.com')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Chido')
    await page.locator('[placeholder="Enter your password"]').fill('1234')
    await page.locator('').click()
    await page.waitForSelector('text=Sign in', {timeout: 5000})
    await page.locator('text=Sign in').click()
   
})

test.only('Demo Login Test 2', async ({page}) => {
    
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.pause()



})