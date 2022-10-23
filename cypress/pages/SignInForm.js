"use strict";

class SignInForm {
    constructor() {
        this.frmLogin = "form#login_form";
        this.btnSignIn = "button#SubmitLogin";
        this.txtEmail = "input#email";
        this.txtPassword = "input#passwd";
    }

    scrollToForm(){
        cy.get(this.frmLogin).scrollIntoView();
    }

    clickBtnSignIn(){
        return cy.get(this.btnSignIn).click();
    }

    login(email, password){
        this.setEmailField(email);
        this.setPasswordField(password);
        this.clickBtnSignIn();
    }

    setEmailField(email){
        if (arguments.length === 1 && typeof email === "string"){
            let emailField = cy.get(this.txtEmail);
            emailField.clear();
            emailField.type(email);
        } else {
            throw new Error("Argument length not supported");
        }
    }

    setPasswordField(pass){
        if (arguments.length === 1 && typeof pass === "string"){
            let passwordField = cy.get(this.txtPassword);
            passwordField.clear();
            passwordField.type(pass);
        } else {
            throw new Error("Argument length not supported");
        }
    }

    /****** ERRORS ******/
    getEmailRequiredError(){
        return cy.get("li").contains("An email address required");
    }

    getEmailInvalidError(){
        return cy.get("li").contains("Invalid email address");
    }

    getAuthenticationFailedError(){
        return cy.get("li").contains("Authentication failed");
    }

    getPasswordRequiredError(){
        return cy.get("li").contains("Password is required");
    }

    getInvalidPasswordError(){
        return cy.get("li").contains("Invalid password");
    }

    /****** HIGHLIGHTED ERRORS ******/
    getEmailHighlightedRed(){
        return cy.get("div[class='form-group form-error'] input#email");
    }

    getEmailHighlightedGreen(){
        return cy.get("div[class='form-group form-ok'] input#email");
    }

}

module.exports = SignInForm;