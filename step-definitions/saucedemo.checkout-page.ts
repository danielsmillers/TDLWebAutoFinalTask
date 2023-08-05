import { Given, When, Then } from '@cucumber/cucumber';
import CheckoutPage from '../page-objects/CheckoutPage';

When(/^User fills the checkout information form$/, async function () {
  await new CheckoutPage(this.web).fillCheckoutForm();
});

When(
  /^User press the “Continue” button to continue with the order$/,
  async function () {
    await new CheckoutPage(this.web).continueButtonPress();
  },
);

When(
  /^User sees correct product details in checkout overview$/,
  async function () {
    await new CheckoutPage(this.web).validateProductDetailsInCheckout(
      this.PRODUCT_NAME,
      this.PRODUCT_PRICE,
    );
  },
);

When(/^User press the “Finish” button$/, async function () {
  await new CheckoutPage(this.web).finishButtonPress();
});

Then(/^User sees that order has been completed$/, async function () {
  await new CheckoutPage(this.web).checkoutPageCheck();
});

Then(/^User clicks on “Back Home” button$/, async function () {
  await new CheckoutPage(this.web).backHomeButtonPress();
});
