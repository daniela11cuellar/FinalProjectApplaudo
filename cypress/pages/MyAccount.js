"use strict";
class MyAccountPage{
    
    constructor(){
        this.url = Cypress.config().baseUrl + "?controller=my-account";
        this.userName = ".account"
    }

    getUrl(){
        return this.url;
    }
    
    verifyUserNameRegistered = () =>{ 
        cy.get(this.userName)
    }

    verifyUserLastNameRegistered = () =>{ 
        cy.get(this.userName)
    }
}

module.exports = new MyAccountPage();