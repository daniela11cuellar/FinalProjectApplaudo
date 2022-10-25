"use strict";
import ProductListingFeature from "../../pages/ProductListing";
import testData from '../../fixtures/navigationURLS.json';

describe("Validate the product listing section exist or not on the main pages", () => {

    //PRODUCT_LISTING_01
    testData.forEach((pages) => {
        it("Verifiying if the product list has at least 1 element on the webpage: " + pages.page, () => {
            cy.visit(pages.url);
            ProductListingFeature.verifyIfListHasElements();
        });
    });

    //PRODUCT_LISTING_02
    testData.forEach((pages) => {
        it("Verifiying if the product list has no elements on the webpage: " + pages.page, () => {
            cy.visit(pages.url);
            ProductListingFeature.verifyIfListNotExist();
            ProductListingFeature.verifyIfWarningMessageExists();
        });
    });

});