Feature: Cart

  Scenario: Add first products to the cart
    Given I login to Wish
    When I enter a product name in the search box
    And I click on the first product
    Then I add the product into the cart