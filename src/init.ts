import * as detox from 'detox';
// const config = require("../package.json").detox;
import { jest, describe, afterEach, afterAll, it, beforeEach, beforeAll } from '@jest/globals';


beforeEach(async function () {

    await device.launchApp({
        launchArgs: {
            detoxPrintBusyIdleResources: "YES"
        },
        newInstance: true,
        permissions: { notifications: "YES" }
    });
    
});

afterEach(async () => {
    await device.terminateApp();
});
