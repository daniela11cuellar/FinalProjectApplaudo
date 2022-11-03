class SearchPage{

    constructor(){
        this.btnSearch = ".button-search";   
        this.btnList = ".icon-th-list";
        this.btnGrid = ".icon-th-large";
        this.title = ".lighter"
        this.image =".product_img_link";
        this.price =".product-price";
        this.showingItem =".product-count";
        this.productList = ".product_list";
    }

    clickButtonList = () =>{
        cy.get(this.btnList)
            .click();
    }

    clickButtonGrid = () =>{
        cy.get(this.btnGrid)
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

    clickButtonSearch = () =>{
        cy.get(this.btnSearch)
            .click();
    }

    getProductListView = () =>{
        return cy.get(this.productList);
    }

    validateTheProductListViewIsDifferent = (listView) =>{
        cy.get(this.productList).should(($currentView) => {
            expect($currentView).to.not.equal(listView)
        })
    }

}

module.exports = new SearchPage();