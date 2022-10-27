const{dataContactUs} = require('../../fixtures/dataContactUs.json');
const url = "http://automationpractice.com/index.php?controller=contact";

describe('TODO api testing', () => {

    it(' POST - Contact us', () => {
        cy.request('POST', url, dataContactUs).then(($response)=>{
            expect(201).to.eq($response.status)
        })
    });

 });