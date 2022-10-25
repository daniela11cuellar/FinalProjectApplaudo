"use strict";
class MyAccountPage{
    
    constructor(){
        this.userName = ".account"
    }
    
    verifyUserNameRegistered = () =>{ 
        cy.get(this.userName)
    }

    verifyUserLastNameRegistered = () =>{ 
        cy.get(this.userName)
    }
}

module.exports = new MyAccountPage();