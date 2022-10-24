import ProductListingFeature from "../../pages/ProductListing";

describe("Check if the section where the products are listed shows at least 1 product", () => {

    const testData = [
        {
            page: 'Homepage',
            url: 'http://automationpractice.com/index.php'
        },
        {
            page: 'Woman Page',
            url: 'http://automationpractice.com/index.php?id_category=3&controller=category'
        },
        {
            page: 'Dresses Page',
            url: 'http://automationpractice.com/index.php?id_category=8&controller=category'
        },
        {
            page: 'T-Shirts Page',
            url: 'http://automationpractice.com/index.php?id_category=5&controller=category'
        },
        {
            page: 'Specials Page',
            url: 'http://automationpractice.com/index.php?controller=prices-drop'
        },
        {
            page: 'Best Sellers Page',
            url: 'http://automationpractice.com/index.php?controller=best-sales'
        },
        {
            page: 'New Products Page',
            url: 'http://automationpractice.com/index.php?controller=new-products'
        }
    ]

    testData.forEach((pages) => {
        it("Verifiying if the product list has at least 1 element on the webpage: "+pages.page, () => {
            cy.visit(pages.url)
            ProductListingFeature.verifyIfListHasElements()
            cy.wait(3000)
        })
    });

})