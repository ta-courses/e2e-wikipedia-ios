import { expect, element } from 'detox';
import WelcomePage from '../src/pageobject/WelcomePage';
import HomePage from '../src/pageobject/HomePage';
import SettingsPage from '../src/pageobject/SettingsPage';
import LoginPage from '../src/pageobject/LoginPage';
import OtherLanguagePage from '../src/pageobject/OtherLanguagePage';
import {jest, describe, afterEach, it, beforeEach} from '@jest/globals'


describe('Add language test', () => {
  beforeEach(async () => {
    await WelcomePage.skipLearnIfNeed();
  });
  it('should add Español as new language', async () => {
    await HomePage.assertIsInHomePage();
    await HomePage.goToSettings();
    // await SettingsPage.goToMyLanguagesSection();
    await SettingsPage.tapToText("My languages");
    await SettingsPage.addAnotherLanguage.tap();
    await OtherLanguagePage.setLanguage("Español");
    await SettingsPage.tapToText("Edit");
    await SettingsPage.deleteLanguageAtIndex(2);
    await SettingsPage.tapToText("Done");
    await SettingsPage.expectTextToBeNotVisible("Español");
  });

});
