/// <reference types="cypress" />
import { BasePage } from "./base";
import { MyAccount } from "./myaccount-page";

export class CreateAccountPage extends BasePage {
    url = "https://magento.softwaretestingboard.com/customer/account/create/"
    firstName = ()=> cy.get('input[title="First Name"]')
    lastName = ()=> cy.get('input[title="Last Name"]')
    email = ()=> cy.get('input[title="Email"]')
    password = ()=> cy.get('input[title="Password"]')
    confirmPassword = ()=> cy.get('input[title="Confirm Password"]')
    createAccountButton = ()=> cy.get('button[title="Create an Account"]')

    fillPersonalInformation(firstName, lastName){
        this.firstName().type(firstName)
        this.lastName().type(lastName)
    }
    fillSignInInformation(email, password){
        this.email().type(email)
        this.password().type(password),
        this.confirmPassword().type(password)
    }
    clickCreateAccount(){
        this.createAccountButton().click()
        const myAccount = new MyAccount()
        cy.url().should("eq", myAccount.url)
        return myAccount
    }
}