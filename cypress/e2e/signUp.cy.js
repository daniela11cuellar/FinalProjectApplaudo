"use strict";
import SignInPage from "../pages/SignIn";
import Faker from "../support/Faker";
import FormSignUp from "../pages/FormSignUp";
import MyAccountPage from "../pages/MyAccount";
import Header from "../pages/Header";


describe('validate the sign up section with a new user and an existing user', () => {
  const name = Faker.getRandomName();
  const lastName = Faker.getRandomLastName();

beforeEach(()=>{
  cy.visit('/');
  Cypress.config().baseUrl;
  Header.clickBtnSignIn();
  cy.url()
  .should('eq', Cypress.config().baseUrl + '?controller=authentication&back=my-account');
})

//SIGNUP_01
  it('create new user', () => {
    SignInPage.typeInputEmail(Faker.getRandomEmail());
    SignInPage.clickBtnCreateAccount();
    FormSignUp.validateThetitleIsPresent();
    FormSignUp.selectRadioTitle();
    FormSignUp.typeInputName(name);
    FormSignUp.typeInputLastName(lastName);
    FormSignUp.typeInputPassword();
    FormSignUp.selectDayDate();
    FormSignUp.selectMonthDate();
    FormSignUp.selectYearDate();
    FormSignUp.typeAddress();
    FormSignUp.typeCity(Faker.getRandomCity());
    FormSignUp.selectState();
    FormSignUp.typeZipCode();
    FormSignUp.typeMobilePhone();
    FormSignUp.typeAddressAlias(Faker.getRandomEmail());
    FormSignUp.clickButtonSubmit();
    cy.url()
      .should('eq', Cypress.config().baseUrl + '?controller=my-account');
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
    cy.contains("email address has already been registered") 
  })
})