"use strict";
import Accordion from "../pages/Accordion";
import testData from '../fixtures/categoriesSecionURLS.json';
import ProductListing from "../pages/ProductListing";
import Product from "../pages/Product";


describe("Block Cart (Alert of product successfully added to cart)", () => {

    // ACCORDION_01
    it("Check if exist a section according to the visited webpage", () => {
        cy.visit(testData[0].url);
        Accordion.verifyIfAccordionExists();
        Accordion.verifyIfExistCategoriesSection(testData[0].page);
    });

    // ACCORDION_02
    it("Verify the catalog section of the accordion allows the user to select a filter for the products", () => {
        Accordion.selectCatalogFilter();
    });

    // ACCORDION_03
    it("Check if the information section of the accordion has multiple links to redirect the user to another page", () => {
        Accordion.verifyRedirectsOnInformationSection();
    });

    // ACCORDION_04
    it("Validate if the \"Specials\" section is present on the accordion", () => {
        Accordion.verifySpecialSection();
        cy.go('back');
    });

    // ACCORDION_05
    it("Validate if the \"Our Stores\" section is present on the accordion", () => {
        Accordion.verifyOurStoresSection();
        cy.go('back');
    });

    // ACCORDION_06
    it("Check if the \"Viewed Products\"section of the accordion exists", () => {
        ProductListing.verifyIfListHasElements();
        Product.mouseOverRandomProduct();
        Product.clickMoreButton();
        cy.go("back");
        Accordion.verifyViewedProductsSection();
    });
});