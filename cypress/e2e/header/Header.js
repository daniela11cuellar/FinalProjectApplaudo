import IndexPage from "../../pages/Index"; 
import SearchPage from "../../pages/Search"; 
import CategoryPage from "../../pages/Category"; 

var category = "Women";

describe('validate the header section can be navigate', () => {

  beforeEach(()=>{
    cy.visit('https://automationpractice.com');
  })
  
  it('Sign in can be opened', () => {
    IndexPage.clickBtnSignIn();
    cy.url()
    .should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
  })

  it('shopping cart can be viewed', () => {
    IndexPage.clickBtnCart();
    cy.url()
    .should('eq', 'http://automationpractice.com/index.php?controller=order');
  })

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

  it('navigation menu of "Women, Dresses , T-Shirts', () => {
    IndexPage.clickOnCategory(category);
    CategoryPage.validateTitleCategory(category);
  })

})