class indexPage{

    constructor(){
        this.btnSignIn = ".login"; 
    }

    clickBtnSignIn = () =>{
        cy.get(this.btnSignIn)
            .click();
    }
}

module.exports = new indexPage();