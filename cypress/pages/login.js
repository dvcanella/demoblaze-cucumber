class LoginPage {

    elements = {
        loginNav: () => cy.get('#login2'),
        logoutNav: () => cy.get('#logout2'),
        usernameInput: () => cy.get('#loginusername'),
        passwordInput: () => cy.get('#loginpassword'),
        loginButton: () => cy.get('#logInModal  > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        nameofuserNav: () => cy.get('#nameofuser')
    }

    visit() {
        cy.visit('/')
        this.elements.loginNav().click()
    }
   
    clickLoginNav() {
        this.elements.loginNav().click()
    }

    typeUsername(username) {
        this.elements.usernameInput().clear().type(username, { delay: 0 })
    }

    typePassword(password) {
        this.elements.passwordInput().clear().type(password, { delay: 0 })
    }

    clickLoginButton() {
        this.elements.loginButton().click()
    }

    Login(username, password) {
        this.elements.usernameInput().clear().type(username)
        this.elements.passwordInput().clear().type(password)
        this.elements.loginButton().click()
    }

    clickLogoutNav() {
        this.elements.logoutNav()
    }    
}

module.exports = new LoginPage()




