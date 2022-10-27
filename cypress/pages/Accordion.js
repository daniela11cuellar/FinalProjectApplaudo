"use strict";
import Product from "../pages/Product";

class Accordion {

    constructor() {
        this.accordionContainer = "#left_column";
        this.accordionCategoriesSection = "#categories_block_left";
        this.accordionSectionTitle = ".title_block";
        this.accordionCatalogSection = "#layered_block_left";
        this.accordionCatalogFilter = ".layered_filter";
        this.accordionInformationSection = "#informations_block_left_1";
        this.accordionInformationSectionList = ".list-block li a";
        this.accordionSpecialsSection = "#special_block_right";
        this.accordionSpecialsSectionProductList =".products-block li";
        this.accordionSpecialProductTitle=".product-name";
        this.accordionSpecialProductPrice=".special-price";
        this.accordionOurStoresSection = "#stores_block_left";
        this.accordionViewedProductsSection = "#viewed-products_block_left";
    }

    verifyIfAccordionExists = () => {
        cy.get(this.accordionContainer)
            .should("be.visible");
    }


    verifyIfExistCategoriesSection = (pageName) => {
        cy.get(this.accordionCategoriesSection, {timeout: 10000})
            .should("be.visible")
            .scrollIntoView()
            .click()
            .then(() => {
                cy.get(this.accordionCategoriesSection)
                    .find(this.accordionSectionTitle)
                    .invoke("text")
                    .then((text) => {
                        expect(Product.stringRemoveSpecialSymbols(text))
                            .to
                            .eq(pageName);
                    });
            });
    }

    selectCatalogFilter = () => {
        cy.get(this.accordionCatalogSection)
            .find(this.accordionCatalogFilter)
            .should("have.length.greaterThan", 0)
            .then(listOfFilters => {
                Product.getAndSaveRandomNumber(0, listOfFilters.length - 1, "randomNumber");
                cy.readFile("cypress/fixtures/randomNumber.json")
                    .then((data) => {
                        cy.wrap(listOfFilters)
                            .eq(data.randomNumber)
                            .scrollIntoView()
                            .then(() => {
                                this.clickOnFilterElement(listOfFilters, data.randomNumber);
                            })
                    });
            });
        this.scrollToTopOfCatalog();
    }

    clickOnFilterElement = (listOfFilters, listOfFilterRandomNumber) => {
        cy.wrap(listOfFilters)
            .eq(listOfFilterRandomNumber)
            .find("li>:nth-child(1)")
            .should("have.length.greaterThan", 0)
            .then(filterToSelect => {
                Product.getAndSaveRandomNumber(0, filterToSelect.length - 1, "randomNumberFilter");
                cy.readFile("cypress/fixtures/randomNumberFilter.json")
                    .then((data) => {
                        cy.wrap(filterToSelect)
                            .eq(data.randomNumber)
                            .scrollIntoView()
                            .click();
                    });
            })
    }

    scrollToTopOfCatalog = () => {
        cy.get(this.accordionCatalogSection)
            .should("be.visible").scrollIntoView();
    }

    verifyRedirectsOnInformationSection = () => {
        cy.get(this.accordionInformationSection)
            .should("be.visible")
            .find(this.accordionInformationSectionList)
            .each(($informationSectionLink) => {
                cy.wrap($informationSectionLink)
                    .should("be.visible");
        })
    }

    verifySpecialSection = () =>{
        cy.get(this.accordionSpecialsSection)
            .should("be.visible")
            .find(this.accordionSpecialsSectionProductList)
            .should("have.length.greaterThan", 0)
            .then(listSpecialProducts => {
                Product.getAndSaveRandomNumber(0, listSpecialProducts.length - 1, "randomNumber");
                cy.readFile("cypress/fixtures/randomNumber.json")
                    .then((data) => {

                        cy.wrap(listSpecialProducts)
                            .eq(data.randomNumber)
                            .find(this.accordionSpecialProductTitle)
                            .invoke("text")
                            .then((text) => {
                                Product.saveProductTitle(Product.stringRemoveSpecialSymbols(text))
                            });

                        cy.wrap(listSpecialProducts)
                            .eq(data.randomNumber)
                            .find(this.accordionSpecialProductPrice)
                            .invoke("text")
                            .then((text) => {
                                Product.saveProductPrice(Product.stringRemoveSpecialSymbols(text))
                            });

                        cy.wrap(listSpecialProducts)
                            .eq(data.randomNumber)
                            .find(this.accordionSpecialProductTitle)
                            .scrollIntoView()
                            .click();

                        Product.verifyMoreInfoWebpage();
                    });
            });
    }

    verifyOurStoresSection = () => {
        cy.get(this.accordionOurStoresSection, { timeout: 10000 })
            .should("be.visible")
            .scrollIntoView()
            .find(".btn")
            .contains("Discover our stores").click();
        cy.url().should("eq","http://automationpractice.com/index.php?controller=stores");
    }

    verifyViewedProductsSection = () => {
        cy.get(this.accordionViewedProductsSection, { timeout: 10000 })
            .should("be.visible")
            .scrollIntoView();
    }

}

module.exports = new Accordion;
