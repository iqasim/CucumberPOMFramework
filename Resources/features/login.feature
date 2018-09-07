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
Feature: Sign In
  As an end-user of the freeCRM
  I want to login to application with my credentails
  In order to use the application features.

  Background: User navigates to Application URL
    Given I am on the Login page URL "https://www.freecrm.com/index.html"
    Then I should see Log In Page

  @sanity
  Scenario: Sign In with valid credential
    When I enter username as "qasimran123"
    And I enter password as "password"
    And click on login button
    Then I sould see application homepage
    And I sould see CRMPRO  NEWS message on home Page

  @sanity
  Scenario Outline: Sign In with valid credentials
    When I enter username as "<userName>"
    And I enter password as "<password>"
    And click on login button
    Then I sould see application homepage
    And I sould see CRMPRO  NEWS message on home Page

    Examples: 
      | userName    | password |
      | qasimran123 | password |
      | qasimran123 | password |
      | qasimran123 | password |
