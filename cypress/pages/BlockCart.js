"use strict";

class BlockCart {

    constructor() {
        this.divCart = "div#layer_cart";
        this.btnProceedToCheckout = "div.button-container a[title*='checkout']";
        this.btnContinueShopping = "div.button-container span[title*='shopping']";
        this.btnCloseWindow = "span.cross";
        this.headingResultMessage = "h2";
    }

    getDivCart(){
        return cy.get(this.divCart);
    }

    clickBtnProceedToCheckout(){
        this.getDivCart().then(($div) => {
            cy.wrap($div).find(this.btnProceedToCheckout).click();
        });
    }

    clickBtnContinueShopping(){
        this.getDivCart().then(($div) => {
            cy.wrap($div).find(this.btnContinueShopping).click();
        });
    }

    clickBtnCloseWindow(){
        this.getDivCart().then(($div) => {
            cy.wrap($div).find(this.btnCloseWindow).click();
        });
    }

    getHeadingResultMessage(){
        return cy.get(this.headingResultMessage).contains("added to your shopping cart");
    }

}

module.exports = BlockCart;
