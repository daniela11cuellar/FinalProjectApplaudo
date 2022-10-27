"use strict";
import SignInForm from "../pages/SignInForm"
import Faker from "../support/Faker";
import Header from "../pages/Header"
import MyAccountPage from "../pages/MyAccount";


describe("Validate the sign in section", () => {
    let signInForm;
    const myAccountPage = MyAccountPage
    const header = Header;

    beforeEach(()=>{
        cy.visit("?controller=authentication&back=my-account");
        signInForm = new SignInForm();
    })

    // SIGNIN_01
    it("should redirect the user to their MyAccount page", () => {
        const email = "username123@gmail.com";
        const password = "password";
        signInForm.scrollToForm();
        signInForm.login(email, password);
        cy.url().should("eq", myAccountPage.getUrl());
    })

    //SIGNIN_02
    it("should redirect the user to the authentication page", () => {
        const email = "username123@gmail.com";
        const password = "password";
        signInForm.scrollToForm();
        signInForm.login(email, password);
        header.clickBtnSignOut();
        cy.url().should("eq", Cypress.config().baseUrl + "?controller=authentication&back=my-account");
    })

    //SIGNIN_03
    it("should display an error message with authentication failed", () => {
        const email = Faker.getRandomEmail();
        const password = Math.random().toString(36).slice(2) + Math.random().toString(36)
            .toUpperCase().slice(2);
        signInForm.scrollToForm();
        signInForm.login(email, password);
        signInForm.getAuthenticationFailedError()
    });

    //SIGNIN_04
    const emailRequiredTuple = [
        Math.random().toString(36).slice(2) + Math.random().toString(36)
            .toUpperCase().slice(2), null
    ];
    emailRequiredTuple.forEach(($password) => {
        specify("should display an error message with email required", () => {
            signInForm.scrollToForm();
            if ($password){
                signInForm.setPasswordField($password);
            }
            signInForm.clickBtnSignIn();
            signInForm.getEmailRequiredError();
        });
    })

    //SIGNIN_05
    it("should display an error message with password required", () => {
        const email = Faker.getRandomEmail();
        signInForm.scrollToForm();
        signInForm.setEmailField(email);
        signInForm.clickBtnSignIn();
        signInForm.getPasswordRequiredError();
    });

    //SIGNIN_06
    it("should display an error message with invalid email address", () => {
        const email = "test@invalidemail.";
        const password = Math.random().toString(36).slice(2) + Math.random().toString(36)
            .toUpperCase().slice(2);
        signInForm.scrollToForm();
        signInForm.login(email, password);
        signInForm.getEmailInvalidError();
    });

})