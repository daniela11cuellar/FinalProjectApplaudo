"use strict";
import BlockCart from "../pages/BlockCart";
import Index from "../pages/Index";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

describe('validate the use for the shopping cart', () => {
  const index = new Index();
  let blockCart;
  const quantity = 2;

beforeEach(()=>{
  index.goToIndex();
  Product.mouseOverRandomProduct();
  Product.extractTitleAndProductPrice();
  Product.clickAddToCartButton();
  blockCart = new BlockCart();
  blockCart.getBtnProceedToCheckout().click();
})

//CART_01
  it('check if is possible to remove a product', () => {
    Cart.removeProduct();
    cy.contains("Your shopping cart is empty.") 
  })

//CART_02
  it('user can proceed to checkout from shopping cart', () => {
     Cart.clickCheckoutButton();
     cy.contains("Create an account")
     cy.contains("Already registered?")
  })

  //CART_03
  it('the product is added to the shopping-cart summary', () => {
    Cart.verifyProductAddedToSummaryCart();
  })


  //CART_04
  it('quantity increases with a click the plus button', () => {
    Cart.addProduct();
    Cart.verifyQuantityProduct(quantity);
  })

  //CART_05
  it('quantity decreases with a click the less button', () => {
    Cart.removeProduct();
    cy.contains("Your shopping cart is empty.");
  })

})
