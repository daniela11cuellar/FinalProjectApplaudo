class CategoryPage{

    constructor(){
        this.titleCategory = ".cat-name"; 
    }

    validateTitleCategory = (category) =>{
        cy.get(this.titleCategory)
          .contains(category);
    }
    
}

module.exports = new CategoryPage();