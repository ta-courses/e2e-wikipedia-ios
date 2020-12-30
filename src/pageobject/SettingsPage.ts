import { expect, element } from 'detox';

export default class SettingsPage {
    static async expectTextToBeNotVisible(text: string) {
      await expect(element(by.text(text))).toBeNotVisible();
    }
    static async deleteLanguageAtIndex(langIndex: number) {
        await element(by.label("Delete ")).atIndex(langIndex).tap();
        await element(by.text("Delete")).tap();
    }
    static get addAnotherLanguage() {
        return element(by.text("Add another language")).atIndex(0);
    }

    static async tapToText(text: string) {
        await element(by.text(text)).tap();
    }
    static async tapToLabel(label: string) {
        await element(by.label(label)).tap();
    }
    static async assertAppVersionShouldBe(appversion: string) {
        await expect(element(by.text(appversion))).toBeVisible();
    }
    static async goToAboutTheApp() {
        await element(by.type('UITableView')).scrollTo('bottom');
        await element(by.text("About the app")).tap();
        await expect(element(by.text("About"))).toBeVisible();
    }
    static async goToLogin() {
        await element(by.text("Log in")).tap();
    }

}