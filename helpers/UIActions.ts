import { Page } from '@playwright/test';
import UIElementActions from './UIElementActions';

export default class UIActions {
  constructor(private page: Page) {
    this.elementAction = new UIElementActions(page);
  }

  private elementAction: UIElementActions;

  /**
   * Navigate to specified URL
   * @param URL
   * */
  public async goto(URL: string): Promise<void> {
    await this.page.goto(URL, {
      timeout: 10000,
      waitUntil: 'load',
    });
  }

  /**
   * Returns the instance of UIElementsActions
   * @param URL
   * @returns
   * */
  public element(selector: string): UIElementActions {
    return this.elementAction.setElement(selector);
  }

  public async timeout(seconds: number): Promise<void> {
    await this.page.waitForTimeout(seconds * 1000);
  }

  public async pause(): Promise<void> {
    await this.page.pause();
  }
}
