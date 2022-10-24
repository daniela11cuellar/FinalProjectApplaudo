class SearchPage{

    constructor(){
        this.btnSearch = ".button-search";   
        this.btnList = ".icon-th-list";
        this.title = ".lighter"
        this.image =".product_img_link";
        this.price =".product-price";
        this.showingItem =".product-count";
    }

    clickButtonList = () =>{
        cy.get(this.btnList)
            .click();
    }

    validateTitleSearch = (keyWord) =>{
        cy.get(this.title)
          .contains(keyWord);
    }

    validateImageIsPresent = () =>{
        cy.get(this.image)
        .should('be.visible');
    }

    validateThePriceIsPresent = () =>{
        cy.get(this.price)
        .should('be.visible');
    }

    validateShowingItem = () =>{
        cy.get(this.showingItem)
        .should('be.visible');
    }

}

module.exports = new SearchPage();