import WelcomePage from '../src/pageobject/WelcomePage';
import HomePage from '../src/pageobject/HomePage';
import SettingsPage from '../src/pageobject/SettingsPage';
import OtherLanguagePage from '../src/pageobject/OtherLanguagePage';
import {jest, describe, afterEach, it, beforeEach} from '@jest/globals'


describe('Add language test', () => {
  beforeEach(async () => {
    await WelcomePage.skipLearnIfNeed();
  });
  it('should add Deutsch as new language', async () => {
    await HomePage.assertIsInHomePage();
    await HomePage.goToSettings();
    // await SettingsPage.goToMyLanguagesSection();
    await SettingsPage.tapToText("My languages");
    await SettingsPage.addAnotherLanguage.tap();
    await OtherLanguagePage.setLanguage("Deutsch");
    await SettingsPage.expectTextToBeVisible("Deutsch");
    await SettingsPage.tapToText("Edit");
    await SettingsPage.deleteLanguageAtIndex(1);
    await SettingsPage.expectTextToBeNotVisible("Deutsch");
  });

});
