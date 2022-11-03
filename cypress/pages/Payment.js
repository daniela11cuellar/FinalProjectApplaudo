import PaymentForm from "./PaymentForm";

class Payment {
    constructor() {
        this.lnkPayByBankWire = "div#HOOK_PAYMENT a.bankwire";
        this.paragraphConfirmationMessage = "Your order on My Store is complete.";
    }

    getConfirmationMessage(){
        return cy.contains(this.paragraphConfirmationMessage);
    }

    getLnkPayByBankWire(){
        return cy.get(this.lnkPayByBankWire);
    }

    clickPayByBankWire(){
        this.getLnkPayByBankWire().click();
        return new PaymentForm();
    }

}

module.exports = Payment;