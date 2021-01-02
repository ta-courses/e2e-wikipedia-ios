import * as detox from 'detox';
// const config = require("../package.json").detox;
import { jest, describe, afterEach, afterAll, it, beforeEach, beforeAll } from '@jest/globals';


beforeEach(async function () {

    await device.launchApp({
        launchArgs: {
            detoxPrintBusyIdleResources: "YES"
        },
        newInstance: true,
        permissions: { notifications: "YES" },
        languageAndLocale: {
            language: "en-GB",
            locale: "en-GB"
          }
    });
    
});

afterEach(async () => {
    await device.terminateApp();
});
