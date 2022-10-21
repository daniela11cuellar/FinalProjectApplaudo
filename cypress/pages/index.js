class IndexPage{

    constructor(){
        this.btnSignIn = ".login";
        this.categories = ".sf-menu";
    }

    clickBtnSignIn = () =>{
        cy.get(this.btnSignIn)
            .click();
    }

    clickOnCategory = (category) =>{
        cy.get(this.categories)
        .within(() => {
            return cy.get('[title="'+category+'"]')
            .first().click();
          })
    }
    
}

module.exports = new IndexPage();