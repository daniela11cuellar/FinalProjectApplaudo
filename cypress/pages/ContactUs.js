"use strict";

class ContactUs {
    constructor() {
        this.contacUsFormContainer="form.contact-form-box";
        this.subjectHeading="select#id_contact";
        this.emailInput="input#email";
        this.orderRefereceInput="input#id_order";
        this.messageInput="textarea#message";
    }

    fillContactUsForm = (subject,email,orderReference,message) =>{
        cy.get(this.subjectHeading).should("be.visible").scrollIntoView().select(subject);
        cy.get(this.emailInput).should("be.visible").scrollIntoView().type(email);
        cy.get(this.orderRefereceInput).should("be.visible").scrollIntoView().type(orderReference);
        cy.get(this.messageInput).should("be.visible").scrollIntoView().type(message);
        cy.get(this.contacUsFormContainer).should("be.visible").scrollIntoView().submit();
    }

}

module.exports = new ContactUs();