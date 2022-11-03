class PaymentForm {
    constructor() {
        this.btnConfirmOrder = "p#cart_navigation button[type='submit']";
    }

    getBtnConfirmOrder(){
        return cy.get(this.btnConfirmOrder);
    }

    clickToConfirmOrder(){
        this.getBtnConfirmOrder().click();
    }
}

module.exports = PaymentForm