"use strict";
import SignInPage from "../../pages/SignIn";
import Faker from "../../support/Faker";
import FormSignInPage from "../../pages/FormSignUp";
import MyAccountPage from "../../pages/MyAccount";
import IndexPage from "../../pages/Index";


describe('validate the sign up section with a new user and an existing user', () => {
  var name = Faker.getRandomName();
  var lastName = Faker.getRandomLastName();

beforeEach(()=>{
  cy.visit('https://automationpractice.com');
  IndexPage.clickBtnSignIn();
  cy.url()
  .should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
})

//SIGNUP_01
  it('create new user', () => {
    SignInPage.typeInputEmail(Faker.getRandomEmail());
    SignInPage.clickBtnCreateAccount();
    FormSignInPage.validateThetitleIsPresent();
    FormSignInPage.selectRadioTitle();
    FormSignInPage.typeInputName(name);
    FormSignInPage.typeInputLastName(lastName);
    FormSignInPage.typeInputPassword();
    FormSignInPage.selectDayDate();
    FormSignInPage.selectMonthDate();
    FormSignInPage.selectYearDate();
    FormSignInPage.typeAddress();
    FormSignInPage.typeCity(Faker.getRandomCity());
    FormSignInPage.selectState();
    FormSignInPage.typeZipCode();
    FormSignInPage.typeMobilePhone();
    FormSignInPage.typeAddressAlias(Faker.getRandomEmail());
    FormSignInPage.clickButtonSubmit();
    cy.url()
      .should('eq', 'http://automationpractice.com/index.php?controller=my-account');
    MyAccountPage.verifyUserNameRegistered()
    cy.contains(name);
    MyAccountPage.verifyUserLastNameRegistered()
    cy.contains(lastName);
  })

//SIGNUP_02
  it('create account with email registered', () => {
    SignInPage.typeInputExistingEmail();
    SignInPage.clickBtnCreateAccount();
    cy.scrollTo(100, 100)
    SignInPage.verifyAlertAccountCreated();
    cy.contains("this email address has already been registered") 
  })
})