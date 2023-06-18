/// <reference types="cypress" />


// base page means common functionality
export class BasePage {
    sigInButton = () => cy.get("a").contains("Sign In")
    createAccount = () => cy.get("a").contains("Create an Account")

    selectCreateAccount() {
        this.createAccount().click({force: true})
    }
    selectLoginAccount() {
        this.sigInButton().click({force: true})
    }
}