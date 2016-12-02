const expect = require('unexpected');
const phantomjs = require('phantomjs-prebuilt');
const WebDriverIO = require('webdriverio');

const wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } };
const browser = WebDriverIO.remote({ wdOpts });

global.browser = browser;
global.expect = expect;

module.exports = function hooks() {
  this.registerHandler('BeforeFeatures', (event, done) => {
    phantomjs.run('--webdriver=4444').then((program) => {
      this.process = program;
      browser.init().setViewportSize({ width: 1600, height: 800 }).call(done);
    });
  });

  this.registerHandler('AfterFeatures', (event, done) => {
    if (this.process) this.process.kill();
    done();
  });
};
