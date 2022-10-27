"use strict";
import SignUp from "../pages/SignUp";
import Faker from "../support/Faker";
import FormSignUp from "../pages/FormSignUp";
import MyAccountPage from "../pages/MyAccount";
import Header from "../pages/Header";


describe('validate the sign up section with a new user and an existing user', () => {
  const name = Faker.getRandomName();
  const lastName = Faker.getRandomLastName();

beforeEach(()=>{
  cy.visit('/');
  Header.clickBtnSignIn();
})

//SIGNUP_01
  it('create new user', () => {
    SignUp.typeInputEmail(Faker.getRandomEmail());
    SignUp.clickBtnCreateAccount();
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
    SignUp.typeInputExistingEmail();
    SignUp.clickBtnCreateAccount();
    cy.scrollTo(100, 100)
    SignUp.verifyAlertAccountCreated();
    cy.contains("email address has already been registered") 
  })
})