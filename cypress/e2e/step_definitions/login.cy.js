import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../pages/login'

Given('I open the login page', () => {
    LoginPage.visit()
})

When('I log in with username {string} and password {string}', (username, password) => {
    LoginPage.Login('admin', 'admin')
})

Then('I should be logged in as admin', () => {
    //cy.wait(1000)   
    LoginPage.elements.nameofuserNav().should('contain', 'admin')
})

When('I submit the login form without entering a username and password {string}', (password) => {
    LoginPage.typePassword(password)
    LoginPage.clickLoginButton()
})

When('I submit the login form without entering a password and username {string}', (username) => {
    LoginPage.typeUsername(username)
    LoginPage.clickLoginButton()
})

When('I log in with incorrect username {string} and password {string}', (username, password) => {
    LoginPage.Login(username, password)
})

Given('I am logged in with username {string} and password {string}', (username, password) => {
    LoginPage.Login(username, password)
    
})

When ('I log out', () => {
    LoginPage.clickLogoutNav()
})

Then('The navigation bar should not have the username', () => { 
    LoginPage.elements.nameofuserNav().should('contain', '')
  })













