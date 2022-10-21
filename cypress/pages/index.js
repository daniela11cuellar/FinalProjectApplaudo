class indexPage{

    constructor(){
        this.btnSignIn = ".login"; 
        this.searchInput = "#search_query_top";
        this.btnSearch = ".button-search";   
        this.btnList = ".icon-th-list";
    }

    clickBtnSignIn = () =>{
        cy.get(this.btnSignIn)
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

module.exports = new indexPage();