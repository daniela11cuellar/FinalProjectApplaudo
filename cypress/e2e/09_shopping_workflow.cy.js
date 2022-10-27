"use strict";

import Product from "../pages/Product";
import Cart from "../pages/Cart";
import SignUp from "../pages/SignUp";
import Faker from "../support/Faker";
import FormSignUp from "../pages/FormSignUp";
import MyAccountPage from "../pages/MyAccount";
import Header from "../pages/Header";
import OrderHistory from "../pages/OrderHistory"
import BlockCart from "../pages/BlockCart"

describe('Shopping workflow', function () {
    it("should verify the user is able to purchase clothes on the website", () => {
       cy.visit("/");
       // PRODUCT_01
       cy.viewport(1280, 720);
       Product.mouseOverRandomProduct();
       Product.extractTitleAndProductPrice();
       Product.clickAddToCartButton();

        // CART_02
        const blockChart = new BlockCart();
        blockChart.getBtnProceedToCheckout().click();
        Cart.clickCheckoutButton();
        cy.contains("Create an account")
        cy.contains("Already registered?")

        // SIGNUP_01
        const name = Faker.getRandomName();
        const lastName = Faker.getRandomLastName();
        SignUp.typeInputEmail(Faker.getRandomEmail());
        SignUp.clickBtnCreateAccount();
        FormSignUp.validateThetitleIsPresent();
        FormSignUp.selectRadioTitle();
        FormSignUp.typeInputName(name);
        FormSignUp.typeInputLastName(lastName);
        FormSignUp.typeInputPassword();
        FormSignUp.selectDayDate();
        FormSignUp.selectMonthDate();
        FormSignUp.selectYearDate();
        FormSignUp.typeAddress();
        FormSignUp.typeCity(Faker.getRandomCity());
        FormSignUp.selectState();
        FormSignUp.typeZipCode();
        FormSignUp.typeMobilePhone();
        FormSignUp.typeAddressAlias(Faker.getRandomEmail());
        FormSignUp.clickButtonSubmit();

        // From the registered addresses,  check the "Use the delivery address as the billing address" option is enabled
        cy.get("input#addressesAreEquals").check();

        // Optionally add a comment to the order

        // Click "Proceed to checkout" button
        cy.get("button[name='processAddress']").click();

        // Choose a shipping option for the address
        cy.get("div.radio input[type='radio']").check();

        // Check the "I agree to the terms of service"
        cy.get("input#cgv").check();

        // Click the "Proceed to checkout" button
        cy.get("button[name='processCarrier']").click();

        // Click on a payment option
        cy.get("div#HOOK_PAYMENT a.bankwire").click();

        // Click on the button "I confirm my order"
        cy.get("p#cart_navigation button[type='submit']").click();

        // When the alert of confirmation shows up, click on the "Continue" option
        cy.contains("Your order on My Store is complete.");

        const header = Header;
        header.clickViewMyAccount();

        const myAccountPage = MyAccountPage;
        myAccountPage.clickAccountOrderHistoryBtn();

        const orderHistory = new OrderHistory();
        orderHistory.getAccountOrderListTable();

        orderHistory.getAccountOrdersLis().should("have.length", 1);
    });
});

