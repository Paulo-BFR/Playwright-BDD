import { test, expect } from '@playwright/test';

test('test login with sucess', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  //login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.waitForTimeout(1000);
  await expect(page.getByText('Swag Labs'), 'should be logged in').toBeVisible();

  //produtos
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#shopping_cart_container').click();

  //carrinho de compras
  await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection')).toBeVisible();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await page.locator('#checkout').click();

  //checkout
  await page.locator('#first-name').fill('Paulo')
  await page.locator('#last-name').fill('Silva');
  await page.locator('#postal-code').fill('12345');
  await page.locator('#continue').click();

  //checkout overview
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.getByText('Payment Information')).toBeVisible();
  await expect(page.getByText('Shipping Information')).toBeVisible();
  await expect(page.getByText('SauceCard #31337')).toBeVisible();
  await expect(page.getByText('Free Pony Express Delivery!')).toBeVisible();
  await expect(page.getByText('Total: $29.99')).toBeVisible();
  await page.locator('#finish').click();
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
  await page.locator('#back-to-products').click();
});
