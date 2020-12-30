const execSync = require("child_process").execSync;

const IOS = process.env.IOS || "14.3";
const REPORT_DIR = process.env.REPORT_DIR || `./report/${IOS}`;
const CURR_BRANCH_TESTER = execSync("echo $(git rev-parse --abbrev-ref HEAD)", {
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
  // testRunner: "groups",
  runner: "groups",
  setupFilesAfterEnv: ["../src/init.ts"],
  testEnvironment: "../src/environment",
  testTimeout: 30000,
  injectGlobals: true,
  preset: "ts-jest",
  verbose: true,
  reporters: [
    "detox/runners/jest/streamlineReporter",
    [
      "jest-html-reporters",
      {
        filename: `iOS_e2e_report.html`,
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
    ],
    [
      "jest-junit",
      {
        suiteName: `${process.env.SUT_GIT_BRANCH_NAME} ${process.env.IOS}`,
        outputDirectory: REPORT_DIR,
        outputName: "junit.xml",
        uniqueOutputName: "false",
      },
    ],
  ],
};

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

