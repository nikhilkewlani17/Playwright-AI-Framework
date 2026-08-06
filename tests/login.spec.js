import {test,expect} from '@playwright/test';

test("Login", async ({page}) =>{
  await page.goto("https://www.saucedemo.com/");
  let username;
  let password;
  username = await page.getByPlaceholder('Username').fill('standard_user');
  password = await page.getByPlaceholder('Password').fill('secret_sauce');
  let button = await page.locator('#login-button').click();
  const URL = await page.url();
  console.log(URL);
  await expect(page).toHaveURL(URL);

})