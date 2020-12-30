import { expect, element } from 'detox';

export default class LoginPage {
  static async doLogin(username: string, password: string) {
    await element(by.id('ta_username')).replaceText(username);
    await element(by.id('ta_password')).replaceText(password);
    await element(by.text("Log in")).atIndex(1).tap();
  }
}