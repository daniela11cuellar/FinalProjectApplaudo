import ProductListingFeature from "../../pages/ProductListing"
import testData from '../../fixtures/navigationURLS.json'

describe("Check if the section where the products are listed shows at least 1 product", () => {
    testData.forEach((pages) => {
        it("Verifiying if the product list has at least 1 element on the webpage: " + pages.page, () => {
            cy.visit(pages.url)
            ProductListingFeature.verifyIfListHasElements()
            cy.wait(3000)
        })
    })
})