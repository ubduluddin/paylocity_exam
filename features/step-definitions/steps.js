const { Given, When, Then } = require('@wdio/cucumber-framework');
const chai = require('chai');
const expect = chai.expect;

const LoginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboard.page');
const getEmployeeAPI =  require('../src/api/getEmployeeAPI');

const pages = {
    login: LoginPage
}

let userId = null;

Given(/^I go to (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with my username (\w+) and password (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I am in dashboard page$/, async () => {
    const currentUrl = await browser.getUrl();
    console.log(currentUrl);  // Retrieve current URL
    await expect(currentUrl).to.include('Prod/Benefits');
});

When(/^I delete the first employee on the table$/, async () => {
    userId = await dashboardPage.deleteFirstEmployee();
    await browser.pause(3000);
});

Then(/^Employee should not be in the dashboard$/, async () => {
    console.log(userId);
    const pageText = await $('body').getText();
    expect(pageText).to.not.include(userId);
});

Then(/^Employee should not be available when checking API$/, async () => {
    const response = await getEmployeeAPI.getEmployeeById(userId);
    console.log(`Response: ${response}`);
    expect(response.status).to.equal(200);
    expect(response.message).to.be.undefined; // Since this is how the API is behaving for an ID that doesn't exist
});

