import { Locator, Page } from '@playwright/test';

export default class UIElementActions {
  constructor(private page: Page) {}

  private locator: Locator;
  private selector: string;

  /**
   * Sets the locator using the provided selector
   * @param selector
   * @returns
   * */
  public setElement(selector: string): UIElementActions {
    this.selector = selector;
    this.locator = this.page.locator(this.selector);
    return this;
  }

  public getFirstLocator(): Locator {
    return this.locator.first();
  }

  public async waitTillVisible(timeout?: number): Promise<UIElementActions> {
    await this.getFirstLocator().waitFor({
      state: 'visible',
      timeout: timeout * 1000 ?? 10000,
    });
    return this;
  }

  public async click(): Promise<UIElementActions> {
    await this.getFirstLocator().click();
    return this;
  }

  public async getAllLocators(): Promise<Array<Locator>> {
    return await this.locator.all();
  }

  public async getAttribute(attribute: string): Promise<string> {
    return await this.locator.getAttribute(attribute);
  }
}
