"use strict";
import ProductListing from "../pages/ProductListing";
import testData from '../fixtures/navigationURLS.json';

describe("Validate the product listing section exist or not on the main pages", () => {

    //PRODUCT_LISTING_01
    testData.forEach(function(i, idx, pages){
        if (idx != pages.length - 1){
            it("Verifying if the product list has at least 1 element on the webpage: " + pages[idx].page, () => {
                cy.visit(pages[idx].url);
                ProductListing.verifyIfListHasElements();
            });
        }
    });

    //PRODUCT_LISTING_02
        it("Verifying if the product list has no elements on the webpage: " + testData[6].page, () => {
            cy.visit(testData[6].url);
            ProductListing.verifyIfListNotExist();
            ProductListing.verifyIfListHasNoProductsMessageExists();
        });

});