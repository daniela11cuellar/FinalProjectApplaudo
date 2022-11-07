"use strict";

import Product from "../pages/Product";
import Cart from "../pages/Cart";
import SignUp from "../pages/SignUp";
import Address from "../pages/Address"
import Payment from "../pages/Payment"
import Faker from "../support/Faker";
import FormSignUp from "../pages/FormSignUp";
import MyAccountPage from "../pages/MyAccount";
import Header from "../pages/Header";
import Index from "../pages/Index"
import OrderHistory from "../pages/OrderHistory"
import BlockCart from "../pages/BlockCart"
import dataSignUp from "../fixtures/dataSignUp.json";

describe('Shopping workflow', function () {
    it("should verify the user is able to purchase clothes on the website", () => {
     const indexPage = new Index();
     indexPage.goToIndex();

     // PRODUCT_01
     cy.viewport(1280, 720);
     Product.mouseOverRandomProduct();
     Product.extractTitleAndProductPrice();
     Product.clickAddToCartButton();

        // CART_02
     const blockChart = new BlockCart();
     blockChart.clickBtnProceedToCheckout();
     Cart.clickCheckoutButton();
     cy.contains("Create an account")
     cy.contains("Already registered?")

        // SIGNUP_01
     const email = Faker.getRandomEmail();
     SignUp.typeInputEmail(email);
     SignUp.clickBtnCreateAccount();
     const name = Faker.getRandomName();
     const lastName = Faker.getRandomLastName();
     const city = Faker.getRandomCity();
     FormSignUp.fillFormSignUp(name, lastName,
         dataSignUp.password, dataSignUp.day, dataSignUp.month, dataSignUp.year,
         dataSignUp.address, city, dataSignUp.state, dataSignUp.zip,
         dataSignUp.phone, email);

     // From the registered addresses,  check the "Use the delivery address as the billing address" option is enabled
     let page = new Address();
     page.checkAddressesAreEquals();

     // Optionally add a comment to the order

     // Click "Proceed to checkout" button
     page = page.clickProceedToCheckout();

     // Choose a shipping option for the address
     page.checkShippingOption();

     // Check the "I agree to the terms of service"
     page.checkAgreeToTermsOfService();

     // Click the "Proceed to checkout" button
     page = page.clickProceedToCheckout();

     // Click on a payment option
     page = page.clickPayByBankWire();

     // Click on the button "I confirm my order"
     page.clickToConfirmOrder();

     // When the alert of confirmation shows up, click on the "Continue" option
     const paymentPage = new Payment();
     paymentPage.getConfirmationMessage();

     const header = Header;
     header.clickViewMyAccount();

     const myAccountPage = MyAccountPage;
     myAccountPage.clickAccountOrderHistoryBtn();

     const orderHistory = new OrderHistory();
     orderHistory.getAccountOrderListTable();

     orderHistory.getAccountOrdersLis().should("have.length", 1);
    });
});

