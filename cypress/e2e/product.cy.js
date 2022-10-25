"use strict";
import Product from "../pages/Product";

describe("Verify if the user is able to add a product to the shopping cart", () => {

    before(() => {
        cy.visit("/");
    });

    //PRODUCT_01
    it("Verifying if the product can be added to the shopping cart on the webpage: ", () => {
        cy.viewport(1280, 720);
        Product.mouseOverRandomProduct();
        Product.extractTitleAndProductPrice();
        Product.clickAddToCartButton();
        Product.verifyProductAddedToCartPopUpWindow();

    });

    //PRODUCT_02
    it("Verifying if the product has a quickview popup window on the webpage: ", () => {
        cy.viewport(1280, 720);
        Product.mouseOverPreviousRandomProduct();
        Product.clickQuickViewButton();
        Product.verifyQuickViewInfoPopUpIsVisible();

    });

    //PRODUCT_03
    it("Verifying if the product can be added to the shopping cart on the webpage: ", () => {
        cy.viewport(1280, 720);
        cy.reload();
        Product.mouseOverPreviousRandomProduct();
        Product.clickMoreButton();
        Product.verifyMoreInfoWebpage();

    });

});