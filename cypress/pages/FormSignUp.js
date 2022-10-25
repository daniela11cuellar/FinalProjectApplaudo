"use strict";

class FormSignUp{
    
    constructor(){
        this.title = ".page-heading";
        this.radioTitle = "#id_gender1"
        this.inputName = "#customer_firstname"; 
        this.inputLastname = "#customer_lastname";  
        this.inputPassword = "#passwd";   
        this.selectDay = "#days";  
        this.selectMonth = "#months";  
        this.selectYear = "#years";  
        this.inputAddress = "#address1";
        this.inputCity = "#city";
        this.state = "#id_state";
        this.inputZipCode = "#postcode";  
        this.inputMobilePhone = "#phone_mobile"; 
        this.inputAddresAlias = "#alias"; 
        this.clickBtnSubmit= "#submitAccount";     
    }

    validateThetitleIsPresent = () =>{
        cy.get(this.title)
        .should('be.visible');
    }

    selectRadioTitle = () =>{ 
        cy.get(this.radioTitle, { timeout: 10000 })
            .should('be.visible')
            .click();
            
    }

    typeInputName = (name) =>{ 
        cy.get(this.inputName)
            .click()
            .type(name);
    }

    typeInputLastName = (LastName) =>{ 
        cy.get(this.inputLastname)
            .click()
            .type(LastName);
    }

    typeInputPassword = () =>{ 
        cy.get(this.inputPassword)
            .click()
            .type("password123");
    }

    selectDayDate = () =>{ 
        cy.get(this.selectDay)
        .select("1");
    }

    selectMonthDate = () =>{ 
        cy.get(this.selectMonth)
            .select("January");
    }

    selectYearDate = () =>{ 
        cy.get(this.selectYear)
            
        .select("2000");
    }

    typeAddress = () =>{ 
        cy.get(this.inputAddress)
            .click()
            .type("234 Lookout Street, Sarasot FL 34231");
    }

    typeCity = (city) =>{ 
        cy.get(this.inputCity)
            .click()
            .type(city);
    }

    selectState = () =>{ 
        cy.get(this.state)
            .select("Vermont");
    }

    typeZipCode = () =>{ 
        cy.get(this.inputZipCode)
            .type("57510");
    }

    typeMobilePhone = () =>{ 
        cy.get(this.inputMobilePhone)
            .click()
            .type("3112564789");
    }

    typeAddressAlias = (email) =>{ 
        cy.get(this.inputAddresAlias)
            .click()
            .clear()
            .type(email);
    }

    clickButtonSubmit = () =>{ 
        cy.get(this.clickBtnSubmit)
            .click()
    }
}

module.exports = new FormSignUp();