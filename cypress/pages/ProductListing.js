class ProductListingFeature {
    constructor() {
        this.productList = "ul.product_list";
        this.productListElements = "ul.product_list li.ajax_block_product";
    }

    verifyIfListHasElements = () => {
        cy.get(this.productList).should("be.visible").then(() => {
            cy.get(this.productListElements).should("have.length.greaterThan", 0)
        })
    }

    verifyIfListNotExist = () => {
        cy.get(this.productList).should("not.exist")
    }

    verifyIfListHasNoElements = () => {
        cy.get(this.productList).should("be.visible").then(() => {
            cy.get(this.productListElements).should("have.length", 0)
        })
    }

}

module.exports = new ProductListingFeature();