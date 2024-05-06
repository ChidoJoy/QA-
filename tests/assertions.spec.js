import test, {page,expect} from '@playwright/test'

test('Assertions demo',async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    
    //ASSERTIONS
    //check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if( await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }
//check element hidden
await expect(page.locator('text=The Kitchen')).toBeVisible()
await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
//
//check page url and title
await expect(page).toHaveURL('https://kitchen.applitools.com/')
await expect(page).toHaveTitle('/.*Kitchen/')
await page.pause()
//visual validation with screenshot
await expect(page).toHaveScreenshot()

})