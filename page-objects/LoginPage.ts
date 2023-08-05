import UIActions from '../helpers/UIActions';

export default class LoginPage {
  constructor(private web: UIActions) {}

  private readonly _PRODUCT_SECTION = 'div[class="inventory_container"]';
  private readonly _USERNAME = 'div[class=login_credentials]';
  private readonly _PASSWORD = 'div[class=login_password]';
  private readonly _USERNAME_INPUT_FIELD = 'input[id="user-name"]';
  private readonly _PASSWORD_INPUT_FIELD = 'input[id="password"]';

  private readonly _LOGIN_BUTTON = 'input[data-test="login-button"]';

  public async navigateToLoginPage(): Promise<void> {
    await this.web.goto('https://www.saucedemo.com/');
  }

  public async inputUsername(): Promise<void> {
    const usernameText = await this.web
      .element(this._USERNAME)
      .getFirstLocator()
      .innerHTML();
    const usernameArrayStartIndex = usernameText.indexOf('</h4>');
    const usernameArrayText = usernameText.slice(
      usernameArrayStartIndex + 5,
      usernameText.length,
    );
    const usernameArray = usernameArrayText.split('<br>');

    await this.web
      .element(this._USERNAME_INPUT_FIELD)
      .getFirstLocator()
      .fill(usernameArray[0]);
  }

  public async inputPassword(): Promise<void> {
    const passwordText = await this.web
      .element(this._PASSWORD)
      .getFirstLocator()
      .innerHTML();
    const passwordArrayStartIndex = passwordText.indexOf('</h4>');
    const passwordArrayText = passwordText.slice(
      passwordArrayStartIndex + 5,
      passwordText.length,
    );
    const passwordArray = passwordArrayText.split('<br>');

    await this.web
      .element(this._PASSWORD_INPUT_FIELD)
      .getFirstLocator()
      .fill(passwordArray[0]);
  }

  public async loginButtonPress(): Promise<void> {
    await this.web.element(this._LOGIN_BUTTON).getFirstLocator().click();
    await this.web.element(this._PRODUCT_SECTION).waitTillVisible();
  }
}
