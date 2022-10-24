class ProductListingFeature {
    constructor() {
        this.productList = "ul.product_list"
        this.productListElements = "ul.product_list li.ajax_block_product"
        this.noProductWarning = "p.alert-warning"
    }

    verifyIfListHasElements = () => {
        cy.get(this.productList).should("be.visible").then(() => {
            cy.get(this.productListElements).should("have.length.greaterThan", 0)
        })
    }

    verifyIfListNotExist = () => {
        cy.get(this.productList).should("not.exist")
    }

    verifyIfWarningMessageExists = () => {
        cy.get(this.noProductWarning).should("be.visible").and("have.css","background-color","rgb(254, 145, 38)").and("have.css","border-color","rgb(228, 117, 43)")
    }

}

module.exports = new ProductListingFeature();