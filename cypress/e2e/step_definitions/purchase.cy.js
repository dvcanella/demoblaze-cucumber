import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PurchasePage from '../../pages/purchase'

Given('I open the home page', () => {
    cy.visit('/');

});

When('I add the following items to the cart and receive the message {string}', (alertMessage, dataTable) => {
    totalPrice = 0;
    dataTable.hashes().forEach(row => {
        const price = parseInt(row.price);
        PurchasePage.addItemToCart(row.itemName, alertMessage);
        totalPrice += price;
    });
});

Then('the total price should be {string}', (expectedTotal) => {
    PurchasePage.verifyTotalPrice(expectedTotal);
});

When('I complete the purchase with name {string}, country {string}, city {string}, card {string}, month {string}, and year {string}', (name, country, city, card, month, year) => {
    PurchasePage.completePurchase(name, country, city, card, month, year);
});

Then('I should see the message {string}', (expectedMessage) => {
    PurchasePage.verifyPurchaseMessage(expectedMessage);
});

Then('the cart should be empty', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    PurchasePage.verifyCartIsEmpty();
});
