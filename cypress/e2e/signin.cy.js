/// <reference types="cypress" />
import { CreateAccountPage } from "../page/create-account";
import { HomePage } from "../page/home"


describe('Signin Flow', () => {
  it('Perform Signin', () => {
    const home = new HomePage();
    home.visit();
    home.selectCreateAccount();
    const createAccount = new CreateAccountPage()
    createAccount.fillPersonalInformation("Abhinav", "paliwal")
    createAccount.fillSignInInformation(`abhinav-${Math.floor(Math.random()*10000)}@gmail.com`, "Shark@1234")
    createAccount.clickCreateAccount()
  })
})