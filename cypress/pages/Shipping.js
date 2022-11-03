import Payment from "./Payment";

class Shipping {
    constructor() {
        this.rdoShippingOption = "div.radio input[type='radio']";
        this.checkboxAgreeTerms = "input#cgv";
        this.btnProceedToCheckout = "button[name='processCarrier']";
    }

    checkShippingOption(){
        return cy.get(this.rdoShippingOption).check();
    }

    checkAgreeToTermsOfService(){
        return cy.get(this.checkboxAgreeTerms).check();
    }

    clickProceedToCheckout(){
        cy.get(this.btnProceedToCheckout).click();
        return new Payment();
    }
}

module.exports = Shipping;