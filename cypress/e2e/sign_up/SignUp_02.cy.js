import {Header_01} from "../header/Header_01.cy";
import SignInPage from "../../pages/SignIn";


describe('Validate that when entering an existing email a user cannot create an account', () => {

  it('type input email', () => {
    SignInPage.typeInputExistingEmail();
  })

  it('click on button create account', () => {
    SignInPage.clickBtnCreateAccount();
    cy.scrollTo(100, 100)
  })

  it('Validate alert when you try to register with a registered user', () => {
    SignInPage.verifyAlertAccountCreated();
    cy.contains("this email address has already been registered") 
  })
  
})