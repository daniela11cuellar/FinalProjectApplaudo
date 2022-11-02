"use strict";
import Index from "../pages/Index"

describe("Index Page", () => {
    let indexPage;

    beforeEach(() => {
        indexPage = new Index();
        // INDEX_01
        indexPage.goToIndex();
    })

    // INDEX_02
    it("should display the list of popular products when its section is active", () => {
        indexPage.clickPopularTab();
        indexPage.getPopularTabOfStatus().should("have.class", "active");
        indexPage.getPopularProductsList().should("have.class", "active");
    });

    // INDEX_03
    it("should display the list of best seller products when its section is active", () => {
        indexPage.clickBestSellersTab();
        indexPage.getBestSellersTabOfStatus().should("have.class", "active");
        indexPage.getBestSellersProductsList().should("have.class", "active");
    });
});