$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Resources/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the automation practice site",
  "description": "",
  "id": "login-to-the-automation-practice-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7961390056,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Pre-Login page URL \"http://automationpractice.com/index.php\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see site logo",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php",
      "offset": 32
    }
  ],
  "location": "RegistrationPageStepDefinition.i_am_on_the_Pre_Login_page_URL(String)"
});
formatter.result({
  "duration": 11026170420,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_should_see_site_logo()"
});
formatter.result({
  "duration": 59637431,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login with valid credential using data table",
  "description": "",
  "id": "login-to-the-automation-practice-site;login-with-valid-credential-using-data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enters the username and password",
  "rows": [
    {
      "cells": [
        "qasimran1@gmail.com",
        "password"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will be on home page and I will see the Sign Out link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinition.i_click_on_Sign_in_link()"
});
formatter.result({
  "duration": 3129165276,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_enters_the_username_and_password(DataTable)"
});
formatter.result({
  "duration": 319851713,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_will_be_on_home_page_and_I_will_see_the_Sign_Out_link()"
});
formatter.result({
  "duration": 2231289232,
  "status": "passed"
});
formatter.after({
  "duration": 4155295494,
  "status": "passed"
});
});