import UIActions from '../helpers/UIActions';

export default class ProductPage {
  constructor(private web: UIActions) {}

  private readonly _PRODUCT_GRID = 'div[id="inventory_container"]';
  private readonly _ADD_TO_CART_BUTTON =
    'button[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
  private readonly _CART_BUTTON = 'a[class="shopping_cart_link"]';
  private readonly _PRODUCT_NAME =
    'div[class="inventory_list"] > div:nth-of-type(4) > div > div > a > div';
  private readonly _PRODUCT_PRICE =
    'div[class="inventory_list"] > div:nth-of-type(4) > div > div:nth-of-type(2) > div';
  private readonly _CART_PRODUCT_SECTION = 'div[class="cart_list"]';

  private _ACTUAL_PRODUCT_NAME: string;
  private _ACTUAL_PRODUCT_PRICE: string;

  public async productPageCheck(): Promise<void> {
    await this.web.element(this._PRODUCT_GRID).waitTillVisible();
  }

  public async addProductToCart(): Promise<void> {
    await this.web.element(this._ADD_TO_CART_BUTTON).getFirstLocator().waitFor({
      state: 'visible',
      timeout: 10000,
    });
    await this.web.element(this._ADD_TO_CART_BUTTON).getFirstLocator().click();

    const productName = await this.web
      .element(this._PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    this._ACTUAL_PRODUCT_NAME = productName;
    const productPrice = await this.web
      .element(this._PRODUCT_PRICE)
      .getFirstLocator()
      .textContent();
    this._ACTUAL_PRODUCT_PRICE = productPrice;
  }

  public async openCart(): Promise<void> {
    await this.web.element(this._CART_BUTTON).getFirstLocator().click();
    await this.web.element(this._CART_PRODUCT_SECTION).waitTillVisible();
  }

  // ---------------------- SET & GET ACCESSORS --------------------------
  set ACTUAL_PRODUCT_NAME(productName: string) {
    this._ACTUAL_PRODUCT_NAME = productName;
  }
  set ACTUAL_PRODUCT_PRICE(productPrice: string) {
    this._ACTUAL_PRODUCT_PRICE = productPrice;
  }
  get ACTUAL_PRODUCT_NAME(): string {
    return this._ACTUAL_PRODUCT_NAME;
  }
  get ACTUAL_PRODUCT_PRICE(): string {
    return this._ACTUAL_PRODUCT_PRICE;
  }
}
