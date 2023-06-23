/// <reference types="cypress" />
import { HomePage } from "../page/home"
import { ProductPage } from "../page/product-page";
import { SigninPage } from "../page/signin";


describe('Add to product', () => {
    let home
    beforeEach(() => {
        home = new HomePage();
        home.visit();
        home.selectLoginAccount();
        const signinPage = new SigninPage()
        signinPage.fillCredentisals("abhinav@gmail.com", "Shark@1234")
        signinPage.clickSignButton()
    })
    it('Perform add to product for Hero Hoodie', () => {
        home.selectaProduct("Hero Hoodie")
        const productPage = new ProductPage();
        productPage.selectSize("M")
        productPage.selectColor("Green")
        productPage.addToCart("Hero Hoodie")
    })
    it('Perform add to product for Breathe-Easy Tank', () => {
        home.selectaProduct("Breathe-Easy Tank")
        const productPage = new ProductPage();
        productPage.selectSize("S")
        productPage.selectColor("White")
        productPage.addToCart("Breathe-Easy Tank")
    })
})