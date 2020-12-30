import { expect, element } from 'detox';
import WelcomePage from '../src/pageobject/WelcomePage';
import HomePage from '../src/pageobject/HomePage';
import SettingsPage from '../src/pageobject/SettingsPage';
import LoginPage from '../src/pageobject/LoginPage';
import {jest, describe, beforeEach, it} from '@jest/globals'

describe('First test', () => {
  beforeEach(async () => {
    await WelcomePage.skipLearnIfNeed();
  });

  it('should have welcome screen with search box', async () => {
    
    // await WelcomePage.skipLearnIfNeed();
    // await expect(element(by.text("Search Wikipedia"))).toBeVisible();
    await HomePage.assertIsInHomePage();
  });
  it('should fail a login', async () => {
    // await WelcomePage.skipLearnIfNeed();
    // await expect(element(by.text("Search Wikipedia"))).toBeVisible();
    await HomePage.assertIsInHomePage();

    // await element(by.label("settings")).tap();
    await HomePage.goToSettings();

    // await element(by.text("Log in")).tap();
    await SettingsPage.goToLogin();

    // await element(by.id('ta_username')).replaceText('wrong.test@wikipedia.com');
    // await element(by.id('ta_password')).replaceText('password1234');
    // await element(by.text("Log in")).atIndex(1).tap();
    await LoginPage.doLogin('wrong.test@wikipedia.com','password1234');

    // await LoginPage.expectLabelToBeVisible();
    await expect(element(by.label("Incorrect username or password entered. Please try again."))).toBeVisible();
  });

  it.skip('should login as Detox.test2.course', async () => {
    // await WelcomePage.skipLearnIfNeed();
    await HomePage.assertIsInHomePage();
    await HomePage.goToSettings();
    await SettingsPage.goToLogin();
    // await element(by.id('ta_username')).replaceText('Detox.test2.course');
    // await element(by.id('ta_password')).replaceText('!detoxp1845');
    // await element(by.text("Log in")).atIndex(1).tap();
    await LoginPage.doLogin('Detox.test2.course','!detoxp1845');
    await expect(element(by.label("Incorrect username or password entered. Please try again."))).toBeNotVisible();
//Detox.test2.course/!detoxp1845
  });

});
