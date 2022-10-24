import ProductListingFeature from "../../pages/ProductListing"
import testData from '../../fixtures/navigationURLS.json'

describe("Check if the section where the products are listed shows no products", () => {
    testData.forEach((pages) => {
        it("Verifiying if the product list has no elements on the webpage: " + pages.page, () => {
            cy.visit(pages.url)
            ProductListingFeature.verifyIfListNotExist()
            ProductListingFeature.verifyIfWarningMessageExists()
            cy.wait(3000)
        })
    })
})