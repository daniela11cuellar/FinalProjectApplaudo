"use strict";
import ProductFeature from "../../pages/Product";
import testData from '../../fixtures/navigationURLS.json';

describe("Verify if the user is able to add a product to the shopping cart", () => {

    before(()=>{
        cy.viewport(1280, 720);
        cy.visit("http://automationpractice.com/index.php");
    });

    // testData.forEach((pages) => {

        //PRODUCT_01
        it("Verifying if the product can be added to the shopping cart on the webpage: ", () => {
        });

        //PRODUCT_02
        it("Verifying if the product can be added to the shopping cart on the webpage: ", () => {

        });

        //PRODUCT_03
        it("Verifying if the product can be added to the shopping cart on the webpage: ", () => {

        });
    // });

});