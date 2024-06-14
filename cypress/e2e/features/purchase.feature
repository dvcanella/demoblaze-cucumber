Feature: Purchase

        Background:
            Given I open the home page

        @smoke @regression
        Scenario: Complete purchase with multiple items
             When I add the following items to the cart and receive the message "Product added"

                  | itemName          |
                  | Samsung galaxy s6 |
                  | Nokia lumia 1520  |

             Then the total price should be "1180"
              And I complete the purchase with name "John Doe", country "USA", city "New York", card "1234567890123456", month "12", and year "2025"
             Then I should see the message "Thank you for your purchase!"
              And the cart should be empty
