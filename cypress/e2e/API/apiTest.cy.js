const{dataContactUs} = require('../../fixtures/dataContactUs.json');
const url = "http://automationpractice.com/index.php?controller=contact";
const url_cypress = "https://jsonplaceholder.cypress.io/posts";

describe('TODO api testing', () => {

    it(' POST - Contact us', () => {
        cy.request('POST', url, dataContactUs).then(($response)=>{
            expect(201).to.eq($response.status)
        })
    });

    it(' POST - Cypress', () => {
        cy.request('POST', url_cypress, dataContactUs).then(($response)=>{
            expect(201).to.eq($response.status)
        })
    });

 });