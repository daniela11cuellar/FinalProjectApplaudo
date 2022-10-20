import indexPage from "../../pages/index"; 

describe('Verify "Sign in" page can be opened', () => {
  
  it('go to url', () => {
    cy.visit('https://automationpractice.com')
  })

  it('click button sign in', () => {
    indexPage.clickBtnSignIn();
  })

  it('validate login url', () => {
    cy.url()
      .should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
  })

})