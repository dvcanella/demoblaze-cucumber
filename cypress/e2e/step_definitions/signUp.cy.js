import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../../pages/signUp'

Given('I open the sign up page', () => {
  SignUpPage.visit()
});

When('I sign up with a new user with username {string} and password {string}', (username, password) => {
  if (username === 'randomUsername') {
    username = SignUpPage.generateRandomUsername();
  }  
  SignUpPage.signUp(username, password)
});

When('I submit the sign up form without entering a username and password {string}', (password) => {
  SignUpPage.typePassword(password)  
})

When('I submit the sign up form without entering a password and username {string}', (username) => {
  SignUpPage.typeUsername(username) 
})

Then('I should see the alert {string}', (expectedAlertText) => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal(expectedAlertText);
  });

  cy.wait(1000)

});

