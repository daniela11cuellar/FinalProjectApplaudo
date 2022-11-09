"use strict";
import ContactUs from "../pages/ContactUs";

const url_post = "http://automationpractice.com/index.php?controller=contact";
const url_get = "https://mocki.io/v1/f81f6929-4523-4680-bbb2-01fa03407be0";

describe('Api testing', () => {
    it(' GET and POST - Contact us', () => {
        cy.request('GET',url_get).then(($response_get) =>{
            cy.visit('http://automationpractice.com/index.php?controller=contact');
            ContactUs.fillContactUsForm($response_get.body.subject,$response_get.body.email,$response_get.body.order,$response_get.body.message);
        });
    });


});