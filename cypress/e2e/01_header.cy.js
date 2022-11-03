"use strict";
import Header from "../pages/Header"; 
import SearchPage from "../pages/Search"; 
import ProductListing from "../pages/ProductListing";
import testData from '../fixtures/navigationURLSHeader.json';

const category = "Women";
const keyWord = "Blouse";

describe('validate the header section can be navigate', () => {

  beforeEach(()=>{
    cy.visit('/');
  })

  //HEADER_01 - HEADER_02
    testData.forEach(function(i, idx, pages){
      it("Sign in can be opened and shopping cart can be viewed " + pages[idx].page, () => {
          cy.visit(pages[idx].url);
          Header.verifyIconHome();
      });
  });

  //HEADER_03
  it('user is able to search clothes from the header', () => {
    Header.typeInputSearch(keyWord);
    SearchPage.clickButtonSearch();
    cy.url()
    .should('eq', Cypress.config().baseUrl + '?controller=search&orderby=position&orderway=desc&search_query='+keyWord+'&submit_search=');
    SearchPage.validateTitleSearch(keyWord);
    SearchPage.clickButtonList();
    SearchPage.getTotalProducts();
    SearchPage.validateImageIsPresent();
    SearchPage.validateThePriceIsPresent();
    SearchPage.validateShowingItem();
  })

  //HEADER_04
  it('navigation menu of "Women, Dresses , T-Shirts', () => {
    Header.clickOnCategory(category);
    ProductListing.validateTitleCategory(category);
  })

})