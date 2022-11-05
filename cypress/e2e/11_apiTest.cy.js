"use strict";

const url_post = "http://automationpractice.com/index.php?controller=contact";
const url_get = "https://mocki.io/v1/f81f6929-4523-4680-bbb2-01fa03407be0";

describe('Api testing', () => {
    it(' GET and POST - Contact us', () => {
        cy.request('GET',url_get).then(($response_get) =>{
            cy.request('POST', url_post, $response_get.body).then(($response_post)=>{
                expect(200).to.eq($response_post.status)
            });
        });
    });
 });