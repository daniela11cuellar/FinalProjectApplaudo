import IndexPage from "../../pages/Index"; 

describe('Verify "Sign in" page can be opened', () => {
  
  it('go to url', () => {
    cy.visit('https://automationpractice.com')
  })

  it('click button sign in', () => {
    IndexPage.clickBtnSignIn();
  })

  it('validate login url', () => {
    cy.url()
      .should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
  })

})