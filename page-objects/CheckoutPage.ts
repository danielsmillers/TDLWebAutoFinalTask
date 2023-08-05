import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';

export default class CheckoutPage {
  constructor(private web: UIActions) {}

  private readonly _FIRST_NAME_INPUT_FIELD = 'input[data-test="firstName"]';
  private readonly _LAST_NAME_INPUT_FIELD = 'input[data-test="lastName"]';
  private readonly _ZIP_POSTAL_CODE_INPUT_FIELD =
    'input[data-test="postalCode"]';
  private readonly _CONTINUE_BUTTON = 'input[data-test="continue"]';
  private readonly _CHECKOUT_OVERVIEW =
    'div[class="checkout_summary_container"]';
  private readonly _CHECKOUT_PRODUCT_NAME = 'div[class="inventory_item_name"]';
  private readonly _CHECKOUT_PRODUCT_PRICE =
    'div[class="inventory_item_price"]';
  private readonly _FINISH_BUTTON = 'button[data-test="finish"]';
  private readonly _CHECKOUT_COMPLETE =
    'div[class="checkout_complete_container"]';
  private readonly _BACK_HOME_BUTTON = 'button[data-test="back-to-products"]';

  public async fillCheckoutForm(): Promise<void> {
    await this.web
      .element(this._FIRST_NAME_INPUT_FIELD)
      .getFirstLocator()
      .fill('Daniels');
    await this.web
      .element(this._LAST_NAME_INPUT_FIELD)
      .getFirstLocator()
      .fill('Millers');
    await this.web
      .element(this._ZIP_POSTAL_CODE_INPUT_FIELD)
      .getFirstLocator()
      .fill('LV1234');
  }

  public async continueButtonPress(): Promise<void> {
    await this.web.element(this._CONTINUE_BUTTON).getFirstLocator().click();
    await this.web.element(this._CHECKOUT_OVERVIEW).waitTillVisible();
  }

  public async validateProductDetailsInCheckout(
    expectedProductName: string,
    expectedProductPrice: string,
  ): Promise<void> {
    const actualProductName = await this.web
      .element(this._CHECKOUT_PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    const actualProductPrice = await this.web
      .element(this._CHECKOUT_PRODUCT_PRICE)
      .getFirstLocator()
      .textContent();

    await Assert.assertEquals(actualProductName, expectedProductName);
    await Assert.assertEquals(actualProductPrice, expectedProductPrice);
  }

  public async finishButtonPress(): Promise<void> {
    await this.web.element(this._FINISH_BUTTON).getFirstLocator().click();
  }

  public async checkoutPageCheck(): Promise<void> {
    await this.web.element(this._CHECKOUT_COMPLETE).waitTillVisible();
  }

  public async backHomeButtonPress(): Promise<void> {
    await this.web.element(this._BACK_HOME_BUTTON).getFirstLocator().click();
  }
}
