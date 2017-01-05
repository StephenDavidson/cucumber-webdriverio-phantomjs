const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, When, Then }) => {
  Given(/^I am on the search page$/, () => browser.url('https://duckduckgo.com'));

  When(/^I search for "(.*)"$/, value => browser.setValue('input[name="q"]', value)
                  .click('input[type="submit"]'));

  Then(/^I should see "(.*)" in the search results$/, value => browser.waitForVisible('#r1-0')
                  .getText('#r1-0').then(text => expect(text, 'to contain', value)));
});
