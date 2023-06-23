/// <reference types="cypress" />
import { BasePage } from "./base";

export class ProductPage extends BasePage {
    selectSize(size){
        cy.get(".size .swatch-option").contains(size).click()
    }
    selectColor(color){
        cy.get(".color .swatch-option").get(`[option-label="${color}"]`).click()
    }
    addToCart(productName){
        cy.get("button").contains("Add to Cart").click()
        cy.contains(`You added ${productName} to your shopping cart.`).should("exist")
    }
}