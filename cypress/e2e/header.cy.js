"use strict";
import Header from "../pages/Header"; 
import SearchPage from "../pages/Search"; 
import CategoryPage from "../pages/Category"; 

const category = "Women";
const keyWord = "Blouse";

describe('validate the header section can be navigate', () => {

  beforeEach(()=>{
    cy.visit('/');
  })
  
  //HEADER_01
  it('Sign in can be opened', () => {
    Header.clickBtnSignIn();
    cy.url()
    .should('eq', Cypress.config().baseUrl + '?controller=authentication&back=my-account');
  })

  //HEADER_02
  it('shopping cart can be viewed', () => {
    Header.clickBtnCart();
    cy.url()
    .should('eq', Cypress.config().baseUrl + '?controller=order');
  })

  //HEADER_03
  it('user is able to search clothes from the header', () => {
    Header.typeInputSearch(keyWord);
    Header.clickButtonSearch();
    cy.url()
    .should('eq', Cypress.config().baseUrl + '?controller=search&orderby=position&orderway=desc&search_query='+keyWord+'&submit_search=');
    SearchPage.validateTitleSearch(keyWord);
    SearchPage.clickButtonList();
    SearchPage.validateImageIsPresent();
    SearchPage.validateThePriceIsPresent();
    SearchPage.validateShowingItem();
  })

  //HEADER_04
  it('navigation menu of "Women, Dresses , T-Shirts', () => {
    Header.clickOnCategory(category);
    CategoryPage.validateTitleCategory(category);
  })

})