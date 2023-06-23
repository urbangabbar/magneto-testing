/// <reference types="cypress" />
import { BasePage } from "./base";

export class HomePage extends BasePage {
    url = "https://magento.softwaretestingboard.com/"
    visit(){
        cy.visit(this.url)
        cy.url().should("eql", this.url)
    }
    selectaProduct(name){
        cy.contains(name).click()
    }
}