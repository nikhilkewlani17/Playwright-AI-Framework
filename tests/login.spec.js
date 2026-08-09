import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test("User should login successfully with valid credentials", async ({page}) =>{

  const username = 'standard_user';
  const password = 'secret_sauce';
  const logInpage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await logInpage.goTo()
  await logInpage.login(username, password);
  await expect(inventoryPage.productsTitle).toBeVisible();

  const products = inventoryPage.productsName;
  const productsCount = await inventoryPage.products.count();

  console.log(productsCount);
  
  const productsName = await inventoryPage.getProductsName();
  console.log(productsName)
  
  await inventoryPage.addProductToCart("Sauce Labs Backpack");
  await inventoryPage.openCart();
  await expect(cartPage.cartPageTitle).toBeVisible();
  // await page.getByText('Sauce Labs Backpack').click();
  // await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toBeVisible();

});