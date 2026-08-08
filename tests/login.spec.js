import {test,expect} from '@playwright/test';

test("User should login successfully with valid credentials", async ({page}) =>{
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
//   await page.locator('#login-button').click();
  await page.getByRole('button', {name : "Login"}).click();
  await expect(page.getByText('Products')).toBeVisible();
//   await expect(page.locator('.title')).toHaveText('Products');
//   const URL = await page.url();
//   console.log(URL);
//   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  const products = await page.locator('.inventory_item_name')
  const productsCount = await products.count();
  console.log(productsCount);
  
  for(let i = 0; i < productsCount; i++){
    const productsName = await products.nth(i).textContent();
    console.log(productsName)
  }
  await page.getByText('Sauce Labs Backpack').click();
  expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toBeVisible();

});