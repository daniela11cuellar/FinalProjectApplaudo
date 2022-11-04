class PaymentForm {
    constructor() {
        this.btnConfirmOrder = "p#cart_navigation button[type='submit']";
    }

    clickToConfirmOrder(){
        cy.get(this.btnConfirmOrder).click();
    }
}

module.exports = PaymentForm