import {Header_01} from "../header/Header_01.cy";
import SignInPage from "../../pages/SignIn";
import Faker from "../../support/Faker";
import FormSignInPage from "../../pages/FormSignUp";
import MyAccountPage from "../../pages/MyAccount";

describe('Verify that the user can successfully create an account', () => {
  var name = Faker.getRandomName();
  var lastName = Faker.getRandomLastName();

  it('type input email', () => {
    SignInPage.typeInputEmail(Faker.getRandomEmail());
  })

  it('click on button create account', () => {
    SignInPage.clickBtnCreateAccount();
  })

  it('validate the title for create account is present', () => {
    FormSignInPage.validateThetitleIsPresent();
  })

  it('select radio button title', () => {
    FormSignInPage.selectRadioTitle();
  })

  it('type input name', () => {
    FormSignInPage.typeInputName(name);
  })

  it('type input last name', () => {
    FormSignInPage.typeInputLastName(lastName);
  })

  it('type input password', () => {
    FormSignInPage.typeInputPassword();
  })

  it('select day of birth', () => {
    FormSignInPage.selectDayDate();
  })

  it('select month of birth', () => {
    FormSignInPage.selectMonthDate();
  })

  it('select year of birth', () => {
    FormSignInPage.selectYearDate();
  })

  it('type input address', () => {
    FormSignInPage.typeAddress();
  })

  it('type input city', () => {
    FormSignInPage.typeCity(Faker.getRandomCity());
  })

  it('Select state', () => {
    FormSignInPage.selectState();
  })

  it('type zip code', () => {
    FormSignInPage.typeZipCode();
  })

  it('type input mobile phone', () => {
    FormSignInPage.typeMobilePhone();
  })

  it('type address alias', () => {
    FormSignInPage.typeAddressAlias(Faker.getRandomEmail());
  })

  it('send form by clicking on the submit button', () => {
    FormSignInPage.clickButtonSubmit();
  })

  it('validate login url for my account', () => {
    cy.url()
      .should('eq', 'http://automationpractice.com/index.php?controller=my-account');
  })

  it('validate name for new user registered in my account', () => {
    MyAccountPage.verifyUserNameRegistered() 
      cy.contains(name);
  })

  it('validate last name for new user registered in my account', () => {
    MyAccountPage.verifyUserLastNameRegistered() 
      cy.contains(lastName);
  })
})