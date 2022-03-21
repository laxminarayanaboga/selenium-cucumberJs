const { When, Then, Given, After, Before } = require('@cucumber/cucumber')
const { expect } = require('chai')
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver')
const chromedriver = require('chromedriver');


let driver
let sum = 0;

Before(function () {
    console.log('in before hook')

    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
});
When('I add {int} and {int}', function (num1, num2) {
    sum = num1 + num2;
});


Then('the result should be {int}', function (expectedSum) {
    expect(sum).equal(expectedSum)
});

Given('I visit Google page', async () => {
    await driver.get('https://www.google.co.uk/');
});

When('I search for {string}', async (searchString) => {
    await driver.findElement(By.name('q')).sendKeys('Hello World' + '\n')
});

Then('I should see the result', async () => {
    let text = await driver.findElement(By.id('search')).getText()
    console.log(text)
});

After(function () {
    console.log('in after hook')
});