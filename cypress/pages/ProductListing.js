"use strict";
require('cypress-xpath');

class ProductListing {

    constructor() {
        this.productList = "//ul[contains(@class,'product_list')][1]";
        this.productListElements = "ul.product_list li.ajax_block_product";
        this.noProductWarning = "p.alert-warning";
        this.centerColumn = "#center_column";
    }

    verifyIfListHasElements = () => {
        cy.xpath(this.productList)
            .should("be.visible")
            .scrollIntoView()
            .then(() => {
                cy.get(this.productListElements)
                    .should("have.length.greaterThan", 0);
            });
    }

    verifyIfListNotExist = () => {
        cy.get(this.centerColumn)
            .should("be.visible")
            .scrollIntoView();
        cy.xpath(this.productList)
            .should("not.exist");
    }

    verifyIfListHasNoProductsMessageExists = () => {
        cy.get(this.noProductWarning)
            .should("be.visible")
            .and("have.css", "background-color", "rgb(254, 145, 38)")
            .and("have.css", "border-color", "rgb(228, 117, 43)")
            .scrollIntoView();
    }

}

module.exports = new ProductListing();