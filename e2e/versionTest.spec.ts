import { expect, element } from 'detox';
import WelcomePage from '../src/pageobject/WelcomePage';
import HomePage from '../src/pageobject/HomePage';
import SettingsPage from '../src/pageobject/SettingsPage';
import LoginPage from '../src/pageobject/LoginPage';
/**
 * @group smoke
 */
describe('Version test', () => {

  it('app version should have 6.7.3 (0)', async () => {
    await WelcomePage.skipLearnIfNeed();
    await HomePage.assertIsInHomePage();
    await HomePage.goToSettings();
    await SettingsPage.goToAboutTheApp();
    // Detox WebView Limit
    // await SettingsPage.assertAppVersionShouldBe("6.7.3 (0)");
  });

});
