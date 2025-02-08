import homePage from '../pages/homePage';

describe('Cart flow', () => {
    it('Should display correct information during all order process', () => {
      homePage.visit();
      homePage.searchText("ro");

      homePage.inputProductQuantity("Carrot", "5");
      homePage.increaseProductQuantity("Mushroom");
      homePage.increaseProductQuantity("Mushroom");
      homePage.addProductToCart("Carrot");
      homePage.addProductToCart("Mushroom");

      homePage.validateProductQuantityInput("Carrot", "5");
      homePage.validateProductQuantityInput("Mushroom", "3");

      homePage.clickOnCart();

      // next step will fail, because there is a bug in the application (increment button from one product card influence other product cards)
      homePage.validateCartItemQuantity("Carrot", "5 No")
      homePage.validateCartItemQuantity("Mushroom", "3 No")

      homePage.removeProductFromTheCart("Carrot");
    });
  });