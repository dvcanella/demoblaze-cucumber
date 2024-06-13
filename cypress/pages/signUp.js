class SignUpPage {

    elements = {
        signUpNav: () => cy.get('#signin2'),
        usernameInput: () => cy.get('#sign-username'),
        passwordInput: () => cy.get('#sign-password'),
        signUpButton: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
    }

    visit() {
        cy.visit('/');
        this.elements.signUpNav().click();
    }

    typeUsername(username) {
        this.elements.usernameInput().clear().type(username, { delay: 0 });
    }

    typePassword(password) {
        this.elements.passwordInput().clear().type(password, { delay: 0 });
    }

    clickSignUpButton() {
        this.elements.signUpButton().click();
    }

    signUp(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickSignUpButton();
    }

    signUpWithUsername(password) {
        this.typePassword(password);
        this.clickSignUpButton();
    }

    signUpWithPassword(username) {
        this.typeUsername(username);
        this.clickSignUpButton();
    }

    // Function to generate a random username
    generateRandomUsername() {
        const prefix = 'user_';
        const randomString = Math.random().toString(36).substring(2, 8);
        return `${prefix}${randomString}`;
    }

}

module.exports = new SignUpPage();
