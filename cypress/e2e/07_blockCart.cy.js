"use strict";
import BlockCart from "../pages/BlockCart";
import Index from "../pages/Index";
import Product from "../pages/Product";

describe("Block Cart (Alert of product successfully added to cart)", () => {
    const index = new Index();
    const product = Product;
    let blockCart;

    beforeEach(() => {
        index.goToIndex();
        product.mouseOverRandomProduct();
        product.extractTitleAndProductPrice();
        product.clickAddToCartButton();
        blockCart = new BlockCart();
    })

    // SUCCESS_CART_01
    it("should redirect the user to the shopping cart with their selected products  ", () => {
        blockCart.getBtnProceedToCheckout().click();
        cy.url().should("eq", Cypress.config().baseUrl + "?controller=order");
    });

    // SUCCESS_CART_02
    it("should close the pop up cart", () => {
        blockCart.getBtnContinueShopping().click();
        blockCart.getDivCart().should("have.css", "display", "none")
    });

});