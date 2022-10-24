class indexPage{

    constructor(){
        this.btnSignIn = ".login";
        this.categories = ".sf-menu";
        this.btnCart = "Cart";
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

    clickBtnCart = () =>{
        cy.contains(this.btnCart)
        .click();
    }
}

module.exports = new IndexPage();