import indexPage from "../../pages/index"; 
import searchPage from "../../pages/search"; 

var keyWord = "Blouse";

describe('Verify a user is able to search clothes from the header', () => {
  
  it('go to url', () => {
    cy.visit('https://automationpractice.com')
  })

  it('type input search: '+keyWord, () => {
    indexPage.typeInputSearch(keyWord);
  })

  it('click button search', () => {
    indexPage.clickButtonSearch();
  })

  it('validate search url', () => {
    cy.url()
      .should('eq', 'http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query='+keyWord+'&submit_search=');
  })

  it('validate search title with keyword: '+keyWord, () => {
    searchPage.validateTitleSearch(keyWord);
  })

  it('click list icon', () => {
    searchPage.clickButtonList();
  })

  it('validate the image is present', () => {
    searchPage.validateImageIsPresent();
  })

  it('validate the price is present', () => {
    searchPage.validateThePriceIsPresent();
  })

  it('validate the showing item is present', () => {
    searchPage.validateShowingItem();
  })
  
})

