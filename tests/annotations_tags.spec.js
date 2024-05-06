import {test} from '@playwright/test'

test.skip('test one', async({page}) => {

});

//will mark test as failure ,will show error if the test does not fail

test('not yet ready', async ({ page }) => {
   test.fail();

 });

 //test will be aborted
test.fixme('test to be fixed', async ({ page }) => {
 });

 //marks the test as slow and triples the test timeout
test.only('slow test', async ({ page }) => {
   test.slow();
 });
 //tags run npx playwright --grep "@smoke"
 test('Test login page @smoke', async ({ page }) => {
 });