"use strict";

require('cypress-xpath');

class ProductFeature {

    constructor() {
        this.productListElements = "//ul[contains(@class,'product_list')][1]/li";
        this.addToCartPopUpWindo = "";
    }

    // mouseOverRandomProduct =  () => {
    //     cy.xpath(this.productListElements).should("be.visible").should("have.length.greaterThan",0)
    //         .its("length")
    //         .then((n) => Cypress._.random(0,n-1))
    //         .then((k) => {
    //             cy.xpath(this.productListElements).eq(k).scrollIntoView().trigger("mouseover")
    //         })
    // }

    getRandomInt(min, max){
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        cy.readFile("cypress/fixtures/randomNumber.json", (error, data) => {
            if (error) {
                return console.error(error);
            };
        }).then((data) => {
            data.randomNumber = randomNumber;
            cy.writeFile("cypress/fixtures/randomNumber.json", JSON.stringify(data));
        });
    }

    mouseOverRandomProduct =  () => {
        cy.xpath("//ul[contains(@class,'product_list')][1]/li").should("be.visible").should("have.length.greaterThan", 0) // we get the select/option by finding the select by id
            .then(listing => {
                ProductFeature.getRandomInt(0, listing.length - 1);
                cy.readFile("cypress/fixtures/randomNumber.json").then((data) => {
                    cy.wrap(listing).eq(data.randomNumber).scrollIntoView().trigger("mouseover")
                })
            })
    }


    clickAddToCartButton = () =>{
        cy.readFile("cypress/fixtures/randomNumber.json").then((data) => {
            cy.xpath(this.productListElements).eq(data.randomNumber).contains("Add to cart").click();
        });

    }

    verifyProductIsAddedToCart = () =>{
        cy.readFile("cypress/fixtures/randomNumber.json").then((data) => {
            cy.xpath(this.productListElements).eq(data.randomNumber).contains("Add to cart").click();
        });

    }


    clickQuickViewButton = () =>{
        cy.readFile("cypress/fixtures/randomNumber.json").then((data) => {
            cy.xpath(this.productListElements).eq(data.randomNumber).contains("Quick view").click();
        });    }

    clickMoreButton = () =>{
        cy.readFile("cypress/fixtures/randomNumber.json").then((data) => {
            cy.xpath(this.productListElements).eq(data.randomNumber).contains("More").click();
        });    }
}

module.exports = new ProductFeature();