import { Given, When, Then } from '@cucumber/cucumber';
import ProductPage from '../page-objects/ProductPage';

Then(/^User is on Swag Labs products page$/, async function () {
  await new ProductPage(this.web).productPageCheck();
});

When(
  /^User adds - "Sauce Labs Fleece Jacket" to the shopping cart$/,
  async function () {
    const productPage = new ProductPage(this.web);
    await productPage.addProductToCart();

    this.PRODUCT_NAME = productPage.ACTUAL_PRODUCT_NAME;
    this.PRODUCT_PRICE = productPage.ACTUAL_PRODUCT_PRICE;
  },
);

When(/^User opens shopping cart$/, async function () {
  await new ProductPage(this.web).openCart();
});

Then(/^User is back on Swag Labs products page$/, async function () {
  await new ProductPage(this.web).productPageCheck();
});
