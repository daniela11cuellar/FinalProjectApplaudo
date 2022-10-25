"use strict";
class SignUp{
    
    constructor(){
        this.inputEmail = "#email_create"; 
        this.btnCreateAccount = ".icon-user"
        this.alertAccountCreated = "#create_account_error"
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

    typeInputExistingEmail = () =>{ 
        cy.get(this.inputEmail)
            .click()
            .type("username123@gmail.com");
    }

    verifyAlertAccountCreated = () =>{ 
        cy.get(this.alertAccountCreated, { timeout: 10000 })
        .should('be.visible');
    }
}

module.exports = new SignUp();