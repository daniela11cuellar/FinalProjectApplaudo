"use strict";
class Header{

    constructor(){
        this.btnSignIn = ".login";
        this.categories = ".sf-menu";
        this.btnCart = "Cart";
        this.searchInput = "#search_query_top";
        this.btnList = ".icon-th-list";
        this.lnkLogout = "a.logout";
        this.lnkViewMyAccount = "a[title='View my customer account']";
        this.iconHome = ".icon-home";
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
            .clear()
            .type(keyWord);
    }

    clickBtnSignOut = () =>{
        cy.get(this.lnkLogout)
            .click();
    }

    clickViewMyAccount = () =>{
        cy.get(this.lnkViewMyAccount)
            .click();
    }

    verifyIconHome = () =>{
        cy.get(this.iconHome)
        .should('be.visible');
    }
}

module.exports = new Header();