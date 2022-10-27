"use strict";

require('cypress-xpath');

class Product {

    constructor() {
        this.productListElements = "//ul[contains(@class,'product_list')][1]/li";
        this.productListElementTitle = ".product-name";
        this.productListElementPrice = "div.right-block span[itemprop=\"price\"]";
        this.addToCartPopUpWindow = "#layer_cart";
        this.addToCartPopUpWindowTitle = "#layer_cart_product_title";
        this.addToCartPopUpWindowPrice = "#layer_cart_product_price";
        this.addToCartpopUpWindowSuccesfullMessage = "#layer_cart .layer_cart_product h2";
        this.addToCartpopUpWindowCloseButton = "span.cross[title=\"Close window\"]";
        this.quickViewPopUpWindow = ".fancybox-iframe";
        this.quickViewPopUpWindowTitle = "div.pb-center-column > h1";
        this.quickViewPopUpWindowPrice = "#our_price_display";
        this.quickViewPopUpWindowCloseButton = "a.fancybox-close";
    }

    getAndSaveRandomNumber(min, max,fileName) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        cy.readFile("cypress/fixtures/randomNumber.json", (error, data) => {
            if (error) {
                return console.error(error);
            }
            ;
        }).then((data) => {
            data.randomNumber = randomNumber;
            cy.writeFile("cypress/fixtures/"+fileName+".json", JSON.stringify(data));
        });
    }

    saveProductTitle(title) {
        cy.readFile("cypress/fixtures/productInfo.json", (error, data) => {
            if (error) {
                return console.error(error);
            }
            ;
        }).then((data) => {
            data.productTitle = title;
            cy.writeFile("cypress/fixtures/productInfo.json", JSON.stringify(data));
        });
    }

    saveProductPrice(price) {
        cy.readFile("cypress/fixtures/productInfo.json", (error, data) => {
            if (error) {
                return console.error(error);
            }
            ;
        }).then((data) => {
            data.productPrice = price;
            cy.writeFile("cypress/fixtures/productInfo.json", JSON.stringify(data));
        });
    }

    stringRemoveSpecialSymbols(text) {
        return text.replace(/(\r\n|\n|\r)/gm, "").trim();
    }

    mouseOverRandomProduct = () => {
        cy.xpath(this.productListElements)
            .should("be.visible")
            .should("have.length.greaterThan", 0)
            .then(listing => {
                this.getAndSaveRandomNumber(0, listing.length - 1,"randomNumber");
                cy.readFile("cypress/fixtures/randomNumber.json")
                    .then((data) => {
                    cy.wrap(listing)
                        .eq(data.randomNumber)
                        .scrollIntoView()
                        .trigger("mouseover");
                });
            });
    }

    mouseOverPreviousRandomProduct = () => {
        cy.xpath(this.productListElements)
            .should("be.visible")
            .should("have.length.greaterThan", 0)
            .then(listing => {
                cy.readFile("cypress/fixtures/randomNumber.json")
                    .then((data) => {
                        cy.wrap(listing)
                            .eq(data.randomNumber)
                            .scrollIntoView()
                            .trigger("mouseover");
                });
            });
    }

    extractTitleAndProductPrice = () => {
        cy.readFile("cypress/fixtures/randomNumber.json").then((data) => {
            cy.xpath(this.productListElements)
                .eq(data.randomNumber)
                .find(this.productListElementTitle)
                .invoke('text')
                .then((text) => {
                    this.saveProductTitle(this.stringRemoveSpecialSymbols(text));
            });
            cy.xpath(this.productListElements)
                .eq(data.randomNumber)
                .find(this.productListElementPrice)
                .invoke('text')
                .then((text) => {
                    this.saveProductPrice(this.stringRemoveSpecialSymbols(text));
            });
        });
    }

    clickAddToCartButton = () => {
        cy.readFile("cypress/fixtures/randomNumber.json").then((data) => {
            cy.xpath(this.productListElements)
                .eq(data.randomNumber)
                .contains("Add to cart")
                .scrollIntoView()
                .click();
        });
    }

    verifyProductAddedToCartPopUpWindow = () => {
        cy.get(this.addToCartPopUpWindow,{ timeout: 10000 })
            .should("be.visible");

        cy.readFile("cypress/fixtures/productInfo.json").then((data) => {
            cy.get(this.addToCartPopUpWindowTitle)
                .invoke('text')
                .then((text) => {
                    expect(this.stringRemoveSpecialSymbols(text))
                        .to
                        .eq(data.productTitle);
            });
            cy.get(this.addToCartPopUpWindowPrice)
                .invoke('text')
                .then((text) => {
                    expect(this.stringRemoveSpecialSymbols(text))
                        .to
                        .eq(data.productPrice);
            });
        });

        cy.get(this.addToCartpopUpWindowSuccesfullMessage)
            .invoke('text')
            .then((text) => {
                expect(this.stringRemoveSpecialSymbols(text))
                    .to
                    .eq("Product successfully added to your shopping cart");
        });

        cy.get(this.addToCartpopUpWindowCloseButton)
            .should("be.visible").click();
    }

    clickQuickViewButton = () => {
        cy.readFile("cypress/fixtures/randomNumber.json").then((data) => {
            cy.xpath(this.productListElements)
                .eq(data.randomNumber)
                .should("be.visible")
                .contains("Quick view")
                .scrollIntoView()
                .click();
        });
    }

    verifyQuickViewInfoPopUpIsVisible = () => {
        cy.get(this.quickViewPopUpWindow)
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .should("be.visible");
    }

    clickMoreButton = () => {
        cy.readFile("cypress/fixtures/randomNumber.json")
            .then((data) => {
                cy.xpath(this.productListElements)
                .eq(data.randomNumber)
                    .contains("More").scrollIntoView().click();
        });
    }

    verifyMoreInfoWebpage = () => {
            cy.readFile("cypress/fixtures/productInfo.json").then((data) => {
                cy.get(this.quickViewPopUpWindowTitle)
                    .invoke('text')
                    .then((text) => {
                        expect(this.stringRemoveSpecialSymbols(text))
                            .to
                            .eq(data.productTitle);
                });
                cy.get(this.quickViewPopUpWindowPrice)
                    .invoke('text')
                    .then((text) => {
                        expect(this.stringRemoveSpecialSymbols(text))
                            .to
                            .eq(data.productPrice);
                });
            });
    }
}

module.exports = new Product();
