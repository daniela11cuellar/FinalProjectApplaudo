import IndexPage from "../../pages/Index"; 
import CategoryPage from "../../pages/Category"; 

var category = "Women";

describe('Verify navigation menu of "Women, Dresses , T-Shirts"', () => {
  
  it('go to url', () => {
    cy.visit('https://automationpractice.com')
  })

    it('click on category: ' + category, () => {
        IndexPage.clickOnCategory(category);
    })
    
    it('validate category title: ' + category, () => {
        CategoryPage.validateTitleCategory(category);
    })
})