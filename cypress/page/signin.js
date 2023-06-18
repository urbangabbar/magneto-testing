/// <reference types="cypress" />

import { BasePage } from "./base";

export class SigninPage extends BasePage {
    url ="https://magento.softwaretestingboard.com/customer/account/login"
    email = ()=> cy.get('input[title="Email"]')
    password = ()=> cy.get('input[title="Password"]')
    signInSubmitButton = ()=>  cy.get('button[type="submit"]').contains("Sign In")

    fillCredentisals(email, password){
        this.email().type(email)
        this.password().type(password)
    }

    clickSignButton(){
        this.signInSubmitButton().click()
    }

}






// roni_cost@example.com

// Password:roni_cost3@example.com