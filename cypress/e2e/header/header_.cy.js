"use strict";
import IndexPage from "../../pages/Index"; 
import SearchPage from "../../pages/Search"; 
import CategoryPage from "../../pages/Category"; 

var category = "Women";
var keyWord = "Blouse";

describe('validate the header section can be navigate', () => {

  beforeEach(()=>{
    cy.visit('https://automationpractice.com');
  })
  
  //HEADER_01
  it('Sign in can be opened', () => {
    IndexPage.clickBtnSignIn();
    cy.url()
    .should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
  })

  //HEADER_02
  it('shopping cart can be viewed', () => {
    IndexPage.clickBtnCart();
    cy.url()
    .should('eq', 'http://automationpractice.com/index.php?controller=order');
  })

  //HEADER_03
  it('user is able to search clothes from the header', () => {
    IndexPage.typeInputSearch(keyWord);
    IndexPage.clickButtonSearch();
    cy.url()
    .should('eq', 'http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query='+keyWord+'&submit_search=');
    SearchPage.validateTitleSearch(keyWord);
    SearchPage.clickButtonList();
    SearchPage.validateImageIsPresent();
    SearchPage.validateThePriceIsPresent();
    SearchPage.validateShowingItem();
  })

  //HEADER_04
  it('navigation menu of "Women, Dresses , T-Shirts', () => {
    IndexPage.clickOnCategory(category);
    CategoryPage.validateTitleCategory(category);
  })

})