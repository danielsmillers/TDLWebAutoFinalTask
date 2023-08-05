import { chromium, LaunchOptions } from '@playwright/test';

const browserOptions: LaunchOptions = {
  headless: false,
  slowMo: 100,
  args: [
    '--start-maximized',
    '--disable-notifications',
    '--disable-extensions',
    '--disable-infobars',
    '--disable-popup-blocking',
    '--disable-translate',
    '--disable-plugins',
    '--incognito',
  ],
};

export default class Browser {
  static async launch() {
    return await chromium.launch(browserOptions);
  }
}
