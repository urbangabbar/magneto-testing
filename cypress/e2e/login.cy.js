/// <reference types="cypress" />
import { HomePage } from "../page/home"
import { SigninPage } from "../page/signin";


describe('Login Flow', () => {
  it('Perform login', () => {
    const home = new HomePage();
    home.visit();
    home.selectLoginAccount();
    const signinPage = new SigninPage()
    signinPage.fillCredentisals("abhinav@gmail.com", "Shark@1234")
    signinPage.clickSignButton()
  })
})