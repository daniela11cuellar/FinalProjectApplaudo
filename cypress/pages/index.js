class IndexPage{

    constructor(){
        this.btnSignIn = ".login"; 
        this.btnCart = "Cart";
    }
    clickBtnSignIn = () =>{
        cy.get(this.btnSignIn)
            .click();
    }

    clickBtnCart = () =>{
        cy.contains(this.btnCart)
        .click();
    }

}

module.exports = new IndexPage();