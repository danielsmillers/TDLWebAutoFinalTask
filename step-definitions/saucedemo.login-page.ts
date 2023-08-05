import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../page-objects/LoginPage';

Given(/^User has opened Swag Labs website$/, async function () {
  await new LoginPage(this.web).navigateToLoginPage();
});

Given(/^User inputs username - "standard_user"$/, async function () {
  await new LoginPage(this.web).inputUsername();
});

Given(/^User inputs password - "secret_sauce"$/, async function () {
  await new LoginPage(this.web).inputPassword();
});

When(/^User press the “Login” button$/, async function () {
  await new LoginPage(this.web).loginButtonPress();
});
