module.exports = function searchSteps() {
  this.Given(/^I am on the search page$/, () => browser.url('https://duckduckgo.com'));

  this.When(/^I search for "(.*)"$/, value => browser.setValue('input[name="q"]', value)
                  .click('input[type="submit"]'));

  this.Then(/^I should see "(.*)" in the search results$/, value => browser.waitForVisible('#r1-0')
                  .getText('#r1-0').then(text => expect(text, 'to contain', value)));
};
