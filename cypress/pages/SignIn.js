"use strict";
class SignInPage{
    
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
        cy.get(this.alertAccountCreated);
    }
}

module.exports = new SignInPage();