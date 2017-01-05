const { defineSupportCode } = require('cucumber');
const expect = require('unexpected');
const phantomjs = require('phantomjs-prebuilt');
const WebDriverIO = require('webdriverio');

const wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } };
const browser = WebDriverIO.remote({ wdOpts });
let process;

global.browser = browser;
global.expect = expect;

defineSupportCode(({ registerHandler }) => {
  registerHandler('BeforeFeatures', (features, done) => {
    phantomjs.run('--webdriver=4444').then((program) => {
      process = program;
      browser.init().setViewportSize({ width: 1600, height: 800 }).call(done);
    });
  });

  registerHandler('AfterFeatures', () => {
    if (process) process.kill();
  });
});
