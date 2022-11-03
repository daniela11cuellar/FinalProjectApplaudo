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

    checkRadioTitle = () =>{ 
        cy.get(this.radioTitle, { timeout: 10000 })
            .should('be.visible')
            .check();   
    }

    typeInputName = (name) =>{ 
        cy.get(this.inputName)
            .type(name);
    }

    typeInputLastName = (LastName) =>{ 
        cy.get(this.inputLastname)
            .type(LastName);
    }

    typeInputPassword = (pass) =>{ 
        cy.get(this.inputPassword)
            .type(pass);
    }

    selectDayDate = (day) =>{ 
        cy.get(this.selectDay)
        .select(day);
    }

    selectMonthDate = (month) =>{ 
        cy.get(this.selectMonth)
            .select(month);
    }

    selectYearDate = (year) =>{ 
        cy.get(this.selectYear)
        .select(year);
    }

    typeAddress = (address) =>{ 
        cy.get(this.inputAddress)
            .type(address);
    }

    typeCity = (city) =>{ 
        cy.get(this.inputCity)
            .type(city);
    }

    selectState = (state) =>{ 
        cy.get(this.state)
            .select(state);
    }

    typeZipCode = (zip) =>{ 
        cy.get(this.inputZipCode)
            .type(zip);
    }

    typeMobilePhone = (phone) =>{ 
        cy.get(this.inputMobilePhone)
            .type(phone);
    }

    typeAddressAlias = (email) =>{ 
        cy.get(this.inputAddresAlias)
            .clear()
            .type(email);
    }

    clickButtonSubmit = () =>{ 
        cy.get(this.clickBtnSubmit)
            .click()
    }

    fillFormSignUp = (name, lastName, pass, day, month, year, address, city, state, zip, phone, email) =>{
        this.checkRadioTitle();
        this.typeInputName(name);
        this.typeInputLastName(lastName);
        this.typeInputPassword(pass);
        this.selectDayDate(day);
        this.selectMonthDate(month);
        this.selectYearDate(year);
        this.typeAddress(address);
        this.typeCity(city);
        this.selectState(state);
        this.typeZipCode(zip);
        this.typeMobilePhone(phone);
        this.typeAddressAlias(email);
        this.clickButtonSubmit();
    }
}

module.exports = new FormSignUp();