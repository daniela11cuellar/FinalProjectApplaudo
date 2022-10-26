"use strict";

class BlockCart {

    constructor() {
        this.divCart = "div#layer_cart";
        this.btnProceedToCheckout = "div#layer_cart div.button-container a[title*='checkout']";
        this.btnContinueShopping = "div#layer_cart div.button-container span[title*='shopping']";
        this.btnCloseWindow = "div#layer_cart span.cross";
        this.headingResultMessage = "h2";
    }

    getDivCart(){
        return cy.get(this.divCart);
    }

    getBtnProceedToCheckout(){
        return cy.get(this.btnProceedToCheckout, { timeout: 10000 })       
        .should('be.visible');
        ;
    }

    getBtnContinueShopping(){
        return cy.get(this.btnContinueShopping);
    }

    getBtnCloseWindow(){
        return cy.get(this.btnCloseWindow);
    }

    getHeadingResultMessage(){
        return cy.get(this.headingResultMessage).contains("added to your shopping cart");
    }

}

module.exports = BlockCart;
