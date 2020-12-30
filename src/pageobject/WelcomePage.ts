export default class WelcomePage {
  static async skipLearnIfNeed() {
    try {
        await element(by.text("Skip")).tap();
      } catch {
        // do nothing
      }
  }

}