import Shipping from "./Shipping";

class Address {
    constructor() {
        this.checkboxAddressesAreEquals = "input#addressesAreEquals";
        this.btnProceedToCheckout = "button[name='processAddress']";
    }

    getCheckboxAddressesAreEquals(){
        return cy.get(this.checkboxAddressesAreEquals);
    }

    // Check the "Use the delivery address as the billing address" option
    checkAddressesAreEquals(){
        return this.getCheckboxAddressesAreEquals().check();
    }

    clickProceedToCheckout(){
        cy.get(this.btnProceedToCheckout).click();
        return new Shipping();
    }

}

module.exports = Address;