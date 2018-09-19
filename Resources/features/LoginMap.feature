Feature: Login to the automation practice site

  Background: User navigates to Application URL
    Given I am on the Pre-Login page URL "http://automationpractice.com/index.php"
    Then I should see site logo

  Scenario: Login with valid credential using data table
    When I click on Signin link
    And I enters the username and password from Datatable Map
      | username            | password |
      | qasimran1@gmail.com | password |
      | qasimran2@gmail.com | password |
    And I Click on Sign In button
    Then I will be on home page and will see the Sign Out link
    Then I click on the Sign out link
