#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Login
Feature: User Registration
  As an end-user of the Automation Practice
  I want to register to the application
  In order to use the application features.

  Background: User navigates to Application URL
    Given I am on the Pre-Login page URL "http://automationpractice.com/index.php"
    Then I should see site logo

  @sanity
  Scenario Outline: Register to the site
    When I click on SignIn button
    And Enter "<Email_id>" for the signup
    And Click on create an account button
    Then I sould see application registration page
    And I select "<Gender>"
    And I enter "<Firstname>"
    And I enter "<Lastname>"
    And I enter "<Password>"
    And I select "<Day_of_DOB>"
    And I select "<Month_of_DOB>"
    And I select "<Year_of_DOB>"
    Then I enter "<Address>"
    And I enter "<City>"
    And I select "<State>"
    And I enter "<Zip_Postal_Code>"
    And I enter "<Mobile_Number>"
    And I click on Register button
    Then I shoould be login and will see Sign out

    Examples: 
      | Email_id              | Gender | Firstname | Lastname | Password | Day_of_DOB | Month_of_DOB | Year_of_DOB | Address | City  | State   | Zip_Postal_Code | Mobile_Number |
      | qasimran123@gmail.com | Mr.    | Abz       | Abz      | password |          7 | March        |        1980 | 68 AD   | Noida | Alaska  |           12346 |    9990017896 |
      | qasimran114@gmail.com | Mrs.   | Sab       | Sab      | password |         16 | May          |        1984 | R196    | Delhi | Arizona |           65478 |    9990016789 |
