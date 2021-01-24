const execSync = require("child_process").execSync;

const IOS = process.env.IOS || "13.5";
const REPORT_DIR = process.env.REPORT_DIR || `./report/${IOS}`;
const CURR_BRANCH_TESTER = execSync("echo $(git symbolic-ref -q --short HEAD || git describe --tags --exact-match)", {
  encoding: "utf8",
  maxBuffer: 50 * 1024 * 1024,
}).toString();
const XCODE_VERSION = execSync("echo $(xcodebuild -version)", {
  encoding: "utf8",
  maxBuffer: 50 * 1024 * 1024,
}).toString();
const CURR_BRANCH_SUT = execSync(
  "echo $(cd sut && (git symbolic-ref -q --short HEAD || git describe --tags --exact-match)) || echo 'no SUT found'",
  {
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
  }
).toString();

var now = new Date();

module.exports = {
  testRunner: "jest-circus/runner",
  runner: "groups",
  setupFilesAfterEnv: ["../src/init.ts"],
  testEnvironment: "../src/environment",
  testTimeout: 210000,
  injectGlobals: true,
  preset: "ts-jest",
  verbose: true,
  reporters: [
    "detox/runners/jest/streamlineReporter",
    [
      "jest-html-reporters",
      {
        filename: `index.html`,
        publicPath: REPORT_DIR,
        pageTitle: `iOS ${IOS} E2E Test Report - ${CURR_BRANCH_SUT}`,
        customInfos: [
          {
            title: "Report date",
            value: now.toLocaleString(),
          },
          {
            title: "Environment",
            value: "Production",
          },
          {
            title: "App branch/tag",
            value: CURR_BRANCH_SUT,
          },
          {
            title: "Branch Tester",
            value: CURR_BRANCH_TESTER,
          },
          {
            title: "Env Tester",
            value: XCODE_VERSION,
          },
          {
            title: "Device",
            value: `Xcode emulator - iOS ${IOS}`,
          }
        ],
      },
    ], [ 'jest-junit', {
      outputDirectory: REPORT_DIR
    }]
  ],
};
