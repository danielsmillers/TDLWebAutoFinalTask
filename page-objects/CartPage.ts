import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';

export default class CartPage {
  constructor(private web: UIActions) {}

  private readonly _CART_PRODUCT_NAME = 'div[class="inventory_item_name"]';
  private readonly _CART_PRODUCT_PRICE = 'div[class="inventory_item_price"]';
  private readonly _CHECKOUT_BUTTON = 'button[data-test="checkout"]';
  private readonly _CHECKOUT_INFO = 'div[class="checkout_info_container"]';

  public async validateAddedProductToCart(
    expectedProductName: string,
    expectedProductPrice: string,
  ): Promise<void> {
    const actualProductName = await this.web
      .element(this._CART_PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    const actualProductPrice = await this.web
      .element(this._CART_PRODUCT_PRICE)
      .getFirstLocator()
      .textContent();

    await Assert.assertEquals(actualProductName, expectedProductName);
    await Assert.assertEquals(actualProductPrice, expectedProductPrice);
  }

  public async checkoutButtonPress(): Promise<void> {
    await this.web.element(this._CHECKOUT_BUTTON).getFirstLocator().click();
    await this.web.element(this._CHECKOUT_INFO).waitTillVisible();
  }
}
