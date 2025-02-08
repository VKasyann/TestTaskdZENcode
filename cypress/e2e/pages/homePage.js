class HomePage {
    constructor() {
      this.searchForm = '.search-form';
      this.productCard = '.product';
      this.increaseQuantityButton = '.increment';
      this.cartIcon = '.cart-icon';
      this.cartItem = '.cart-item';
      this.cartItemRemoveButton = '.product-remove'
      this.cartItemQuantityText = '.quantity'
    }
  
    visit() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    }
  
    searchText(text) {
      cy.get(this.searchForm).within(() => {
        cy.get("input").type(text);
        cy.get("button").click();
      });
    }

    inputProductQuantity(productName, quantity) {
      cy.get(this.productCard)
        .contains(productName)
        .parents(this.productCard)
        .within(() => {
          cy.get("input").clear().type(quantity);
      });
    }

    increaseProductQuantity(productName) {
      cy.get(this.productCard)
        .contains(productName)
        .parents(this.productCard)
        .within(() => {
          cy.get(this.increaseQuantityButton).click();
      });
    }

    addProductToCart(productName) {
      cy.get(this.productCard)
      .contains(productName)
      .parents(this.productCard)
      .within(() => {
        cy.get("button").click();
      });
    }

    validateProductQuantityInput(productName, quantity) {
      cy.get(this.productCard)
      .contains(productName)
      .parents(this.productCard)
      .within(() => {
        cy.get("input").should("have.value", quantity);
      });
    }

    clickOnCart() {
      cy.get(this.cartIcon).click();
    }

    removeProductFromTheCart(productName) {
      cy.get(this.cartItem)
      .contains(productName)
      .parents(this.cartItem)
      .within(() => {
        cy.get(this.cartItemRemoveButton).click();
      });
    }

    validateCartItemQuantity(productName, quantity) {
      cy.get(this.cartItem)
      .contains(productName)
      .parents(this.cartItem)
      .within(() => {
        cy.get(this.cartItemQuantityText).should("contain.text", quantity);
      });
    }
  }
  
  export default new HomePage();