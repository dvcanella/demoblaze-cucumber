class PurchasePage {
    elements = {
        cartButton: () => cy.get('#cartur'),
        totalPrice: () => cy.get('#totalp'),
        placeOrderButton: () => cy.contains('Place Order'),
        nameInput: () => cy.get('#name'),
        countryInput: () => cy.get('#country'),
        cityInput: () => cy.get('#city'),
        cardInput: () => cy.get('#card'),
        monthInput: () => cy.get('#month'),
        yearInput: () => cy.get('#year'),
        purchaseButton: () => cy.contains('Purchase'),
        confirmationMessage: () => cy.get('.sweet-alert > h2'),
        closeButton: () => cy.get('.confirm')
    }

    addItemToCart(itemName, alertMessage) {
        cy.contains(itemName).click();
        cy.contains('Add to cart').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains(alertMessage);
        });
        cy.visit('/');
    }

    verifyTotalPrice(expectedTotal) {
        this.elements.cartButton().click();
        this.elements.totalPrice().should('have.text', expectedTotal);
    }

    completePurchase() {
        this.elements.placeOrderButton().click();
        this.elements.nameInput().type('John Doe');
        this.elements.countryInput().type('USA');
        this.elements.cityInput().type('New York');
        this.elements.cardInput().type('1234567890123456');
        this.elements.monthInput().type('12');
        this.elements.yearInput().type('2025');
        this.elements.purchaseButton().click();
    }

    verifyPurchaseMessage(expectedMessage) {
        this.elements.confirmationMessage().should('have.text', expectedMessage);
        //this.elements.closeButton().click();

    }

    verifyCartIsEmpty() {
        this.elements.cartButton().click();
        cy.get('.success').should('not.exist');
    }
}

module.exports = new PurchasePage();
