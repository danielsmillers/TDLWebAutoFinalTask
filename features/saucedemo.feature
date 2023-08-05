Feature: E2E Tests Suite To Cover SAUCEDEMO.COM Functionality

  @FINAL_TASK
  Scenario: User orders a product from the SwagLabs store
    Given User has opened Swag Labs website
    And User inputs username - "standard_user"
    And User inputs password - "secret_sauce"
    When User press the “Login” button
    Then User is on Swag Labs products page
    When User adds - "Sauce Labs Fleece Jacket" to the shopping cart
    And User opens shopping cart
    Then User sees product - "Sauce Labs Fleece Jacket" with price - "$49.99"
    When User press “Checkout” button
    And User fills the checkout information form
    And User press the “Continue” button to continue with the order
    And User sees correct product details in checkout overview
    And User press the “Finish” button
    Then User sees that order has been completed
    And User clicks on “Back Home” button
    And User is back on Swag Labs products page