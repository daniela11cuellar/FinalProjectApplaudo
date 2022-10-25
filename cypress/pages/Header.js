"use strict";
class Header{

    constructor(){
        this.btnSignIn = ".login";
        this.categories = ".sf-menu";
        this.btnCart = "Cart";
        this.searchInput = "#search_query_top";
        this.btnSearch = ".button-search";
        this.btnList = ".icon-th-list";
    }

    clickBtnSignIn = () =>{
        cy.get(this.btnSignIn)
            .click();
    }

    clickOnCategory = (category) =>{
        cy.get(this.categories)
        .within(() => {
            return cy.get('[title="'+category+'"]')
            .first().click();
          })
    }

    clickBtnCart = () =>{
        cy.contains(this.btnCart)
        .click();
    }

    typeInputSearch = (keyWord) =>{
        cy.get(this.searchInput)
            .click()
            .type(keyWord);
    }

    clickButtonSearch = () =>{
        cy.get(this.btnSearch)
            .click();
    }
}

module.exports = new Header();