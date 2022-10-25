class Index {

    constructor() {
        this.indexUrl = "/";
        this.popularProductsList = "ul#homefeatured";
        this.bestSellersProductsList = "ul#blockbestsellers";
        this.tabContainer = "ul#home-page-tabs > li > a[data-toggle='tab']";
        this.popularTabOfStatus = "ul#home-page-tabs > li:nth-child(1)";
        this.bestSellersTabOfStatus = "ul#home-page-tabs > li:nth-child(2)";
    }

    goToIndex() {
        cy.visit(this.indexUrl);
    }

    getPopularProductsList() {
        return cy.get(this.popularProductsList);
    }

    getBestSellersProductsList() {
        return cy.get(this.bestSellersProductsList);
    }

    getBestSellersTab() {
        return cy.get(this.tabContainer).contains('Best Sellers');
    }

    getPopularTab() {
        return cy.get(this.tabContainer).contains('Popular');
    }

    getPopularTabOfStatus(){
        return cy.get(this.popularTabOfStatus);
    }

    getBestSellersTabOfStatus(){
        return cy.get(this.bestSellersTabOfStatus);
    }

    clickPopularTab() {
        this.getPopularTab().click();
    }

    clickBestSellersTab() {
        this.getBestSellersTab().click();
    }

    scrollToPopularTab() {
        this.getPopularTab().scrollIntoView();
    }

    scrollToBestSellersTab() {
        this.getBestSellersTab().scrollIntoView();
    }

}

module.exports = Index;