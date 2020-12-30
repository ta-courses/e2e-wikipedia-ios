const IOS = process.env.IOS || "13.5";
const REPORT_DIR = process.env.REPORT_DIR || `./report/${IOS}`;

module.exports = {
  "test-runner": "jest",
  runnerConfig: "e2e/jest.config.js",
  artifacts: {
    rootDir: REPORT_DIR,
  },
  specs: "",
  behaviour: {
    init: {
      reinstallApp: false,
      launchApp: false,
      exposeGlobals: true,
    },
    cleanup: {
      shutdownDevice: false,
    }
  },
  configurations: {
    "ios.com": {
      binaryPath:
        "sut/Build/Products/Debug-iphonesimulator/Wikipedia.app",
      build: "make build",
      type: "ios.simulator",
      device: {
        type: "iPhone 11 Pro Max",
        os: `iOS ${IOS}`,
      },
    },

    "ios.com.iphone8": {
      binaryPath:
        "sut/Build/Products/Debug-iphonesimulator/Wikipedia.app",
      build: "make build",
      type: "ios.simulator",
      device: {
        type: "iPhone 8",
        os: "iOS 13.3",
      },
    },
  },
};
