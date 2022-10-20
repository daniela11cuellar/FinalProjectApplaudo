class indexPage{

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

module.exports = new indexPage();