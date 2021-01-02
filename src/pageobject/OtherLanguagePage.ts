import { expect, element } from 'detox';

export default class OtherLanguagePage {
    static async setLanguage(newLanguage: string) {
        await expect(element(by.label("Wikipedia languages")).atIndex(0)).toBeVisible();
        await expect(element(by.id("ta-lang-table"))).toBeVisible();

        await waitFor(element(by.text(newLanguage)))
            .toBeVisible()
            .whileElement(by.id("ta-lang-table"))
            .scroll(600, "down");

        await element(by.text(newLanguage)).tap();
    }

}