import IndexPage from "../../pages/Index"; 
import SearchPage from "../../pages/Search"; 

var keyWord = "Blouse";

describe('Verify a user is able to search clothes from the header', () => {
  
  it('go to url', () => {
    cy.visit('https://automationpractice.com')
  })

  it('type input search: '+keyWord, () => {
    IndexPage.typeInputSearch(keyWord);
  })

  it('click button search', () => {
    IndexPage.clickButtonSearch();
  })

  it('validate search url', () => {
    cy.url()
      .should('eq', 'http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query='+keyWord+'&submit_search=');
  })

  it('validate search title with keyword: '+keyWord, () => {
    SearchPage.validateTitleSearch(keyWord);
  })

  it('click list icon', () => {
    SearchPage.clickButtonList();
  })

  it('validate the image is present', () => {
    SearchPage.validateImageIsPresent();
  })

  it('validate the price is present', () => {
    SearchPage.validateThePriceIsPresent();
  })

  it('validate the showing item is present', () => {
    SearchPage.validateShowingItem();
  })
  
})

