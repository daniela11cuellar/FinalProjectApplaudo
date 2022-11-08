import Shipping from "./Shipping";

class Address {
    constructor() {
        this.checkboxAddressesAreEquals = "input#addressesAreEquals";
        this.btnProceedToCheckout = "button[name='processAddress']";
    }

    // Check the "Use the delivery address as the billing address" option
    checkAddressesAreEquals(){
        cy.get(this.checkboxAddressesAreEquals).check();
        return this;
    }

    clickProceedToCheckout(){
        cy.get(this.btnProceedToCheckout).click();
        return new Shipping();
    }

}

module.exports = Address;