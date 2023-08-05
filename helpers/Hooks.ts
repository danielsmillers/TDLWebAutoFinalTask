import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout,
  setWorldConstructor,
  ITestCaseHookParameter,
  BeforeStep,
  ITestStepHookParameter,
  Status,
} from '@cucumber/cucumber';
import { Browser } from '@playwright/test';
import WebBrowser from '../config/Browser';
import * as dotenv from 'dotenv';
import UIActions from './UIActions';
import CustomWorld from '../config/CustomWorld';
import Log from './Logger';

const envConfig = dotenv.config().parsed;
setDefaultTimeout(Number.parseInt(envConfig.TEST_TIMEOUT, 10) * 60000);
setWorldConstructor(CustomWorld);

let browser: Browser;

BeforeAll(async function () {
  try {
    browser = await WebBrowser.launch();
  } catch (error) {
    Log.error(error);
  }
});

AfterAll(async function () {
  try {
    await browser.close();
  } catch (error) {
    Log.error(error);
  }
});

Before(async function ({ pickle }: ITestCaseHookParameter) {
  Log.testBegin(`${pickle.name}`);

  this.context = await browser.newContext({
    viewport: null,
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
  });
  this.page = await this.context?.newPage();
  this.web = new UIActions(this.page);
});

After(async function ({ pickle, result }: ITestCaseHookParameter) {
  const status = result.status;
  const scenario = pickle.name;

  if (status === Status.FAILED) {
    const image = await this.page?.screenshot({
      path: `./test-results/screenshots/${scenario.split(' ').join('_')}.png`,
      fullPage: true,
    });
    await this.attach(image, 'image/png');
  }

  await this.context?.close();
  await this.page?.close();

  Log.testEnd(pickle.name, result.status);
});

BeforeStep(async function ({ pickleStep }: ITestStepHookParameter) {
  Log.info(`${pickleStep.text.toUpperCase()}`);
});
