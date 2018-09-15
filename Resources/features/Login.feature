Feature: Login to the automation practice site
  
  Background: User navigates to Application URL
    Given I am on the Pre-Login page URL "http://automationpractice.com/index.php"
    Then I should see site logo
  
   Scenario: Login with valid credential using data table
    When I click on Sign in link
    And I enters the username and password
    | qasimran1@gmail.com | password |
    Then I will be on home page and I will see the Sign Out link
    

 