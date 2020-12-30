import { expect, element } from 'detox';

export default class HomePage {
  static async goToSettings() {
    await element(by.label("Settings")).tap();
  }
  static async assertIsInHomePage() {
    await expect(element(by.text("Search Wikipedia")))
        .toBeVisible();
  }

}