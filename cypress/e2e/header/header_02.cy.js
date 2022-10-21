import IndexPage from "../../pages/Index"; 

describe('Verify shopping cart can be viewed', () => {
  
  it('go to url', () => {
    cy.visit('https://automationpractice.com')
  })

  it('click button cart', () => {
    IndexPage.clickBtnCart();
  })

  it('validate login url', () => {
    cy.url()
      .should('eq', 'http://automationpractice.com/index.php?controller=order');
  })


})