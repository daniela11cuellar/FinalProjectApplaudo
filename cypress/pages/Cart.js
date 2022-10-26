"use strict";
require('cypress-xpath');

class Cart{
    
    constructor(){
        this.btnRemove = ".icon-trash"
        this.btnProceedToCheckout = "div#center_column a[title*='Proceed to checkout']";
        this.productName = ".cart_description .product-name";
        this.productPrice = "span.price .price";
        this.iconPlus = ".button-plus";
        this.quantityProduct = "td.cart_quantity > input[type=hidden]:nth-child(1)";
        this.iconMinus = ".button-minus";  
    }

    removeProduct = () =>{ 
        cy.get(this.btnRemove)
        .scrollIntoView()
        .click();
    }

    clickCheckoutButton = () =>{ 
        cy.get(this.btnProceedToCheckout)
        .scrollIntoView()
        .click();
    }
   
    verifyProductAddedToSummaryCart = () => {
        cy.get(this.productName,{ timeout: 10000 })
            .should("be.visible");

        cy.readFile("cypress/fixtures/productInfo.json").then((data) => {
            cy.get(this.productName)
                .invoke('text')
                .then((text) => {
                    expect(this.stringRemoveSpecialSymbols(text))
                        .to
                        .eq(data.productTitle);
            });
            cy.get(this.productPrice)
                .invoke('text')
                .then((text) => {
                    expect(this.stringRemoveSpecialSymbols(text))
                        .to
                        .eq(data.productPrice);
            });
        });
    }

    stringRemoveSpecialSymbols(text) {
        return text.replace(/(\r\n\t|\n|\r|\t)/gm, "").trim();
    }

    addProduct = () =>{ 
        cy.get(this.iconPlus)
        .click();
    }

    verifyQuantityProduct = (quantity) =>{ 
        cy.get(this.quantityProduct, { timeout: 5000 }).should('have.value', quantity);
    }

    removeProduct = () =>{ 
        cy.get(this.iconMinus)
        .click();
    }

}

module.exports = new Cart();