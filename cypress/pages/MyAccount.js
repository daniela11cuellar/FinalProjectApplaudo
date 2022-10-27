"use strict";
class MyAccountPage{
    
    constructor(){
        this.url = Cypress.config().baseUrl + "?controller=my-account";
        this.userName = ".account"
        this.accountOrderHistory = "span:contains('Order history and details')";
    }

    getUrl(){
        return this.url;
    }

    clickAccountOrderHistoryBtn(){
        return cy.get(this.accountOrderHistory).click();
    }
    
    verifyUserNameRegistered = () =>{ 
        cy.get(this.userName)
    }

    verifyUserLastNameRegistered = () =>{ 
        cy.get(this.userName)
    }
}

module.exports = new MyAccountPage();