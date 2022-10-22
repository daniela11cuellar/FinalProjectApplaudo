class SignInPage{
    
    constructor(){
        this.inputEmail = "#email_create"; 
        this.btnCreateAccount = ".icon-user"
    }

    typeInputEmail = (email) =>{ 
        cy.get(this.inputEmail)
            .click()
            .type(email);
    }
    
    clickBtnCreateAccount = () =>{ 
        cy.get(this.btnCreateAccount)
            .click();
    }
}

module.exports = new SignInPage();