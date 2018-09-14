$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "User Registration",
  "description": "As an end-user of the Automation Practice\r\nI want to register to the application\r\nIn order to use the application features.",
  "id": "user-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Register to the site",
  "description": "",
  "id": "user-registration;register-to-the-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I click on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Enter \"\u003cEmail_id\u003e\" for the signup",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I sould see application registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I select \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter_firstname \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter_lastname \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter_password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select_day \"\u003cDay_of_DOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select_month \"\u003cMonth_of_DOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select_year \"\u003cYear_of_DOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter_address \"\u003cAddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I enter_city \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select_state \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter_zip \"\u003cZip_Postal_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter_mobile \"\u003cMobile_Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I shoould be login and will see Sign out",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "user-registration;register-to-the-site;",
  "rows": [
    {
      "cells": [
        "Email_id",
        "Gender",
        "Firstname",
        "Lastname",
        "Password",
        "Day_of_DOB",
        "Month_of_DOB",
        "Year_of_DOB",
        "Address",
        "City",
        "State",
        "Zip_Postal_Code",
        "Mobile_Number"
      ],
      "line": 51,
      "id": "user-registration;register-to-the-site;;1"
    },
    {
      "cells": [
        "qasimran123@gmail.com",
        "Mr.",
        "Abz",
        "Abz",
        "password",
        "7",
        "3",
        "1980",
        "68 AD",
        "Noida",
        "Alaska",
        "00000",
        "9990017896"
      ],
      "line": 52,
      "id": "user-registration;register-to-the-site;;2"
    },
    {
      "cells": [
        "qasimran114@gmail.com",
        "Mrs.",
        "Sab",
        "Sab",
        "password",
        "16",
        "5",
        "1984",
        "R196",
        "Delhi",
        "Arizona",
        "85001",
        "9990016789"
      ],
      "line": 53,
      "id": "user-registration;register-to-the-site;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5467389119,
  "status": "passed"
});
formatter.background({
  "line": 25,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 26,
  "name": "I am on the Pre-Login page URL \"http://automationpractice.com/index.php\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
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
  "duration": 13283361789,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_should_see_site_logo()"
});
formatter.result({
  "duration": 40190523,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Register to the site",
  "description": "",
  "id": "user-registration;register-to-the-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Login"
    },
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I click on SignIn button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Enter \"qasimran123@gmail.com\" for the signup",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I sould see application registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I select \"Mr.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter_firstname \"Abz\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter_lastname \"Abz\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter_password \"password\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select_day \"7\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select_month \"3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select_year \"1980\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter_address \"68 AD\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I enter_city \"Noida\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select_state \"Alaska\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter_zip \"00000\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter_mobile \"9990017896\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I shoould be login and will see Sign out",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_click_on_SignIn_button()"
});
formatter.result({
  "duration": 4066894230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qasimran123@gmail.com",
      "offset": 7
    }
  ],
  "location": "RegistrationPageStepDefinition.enter_for_the_signup(String)"
});
formatter.result({
  "duration": 190796787,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.click_on_create_an_account_button()"
});
formatter.result({
  "duration": 1588004171,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_sould_see_application_registration_page()"
});
formatter.result({
  "duration": 54005105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 113442758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abz",
      "offset": 19
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter_firstname(String)"
});
formatter.result({
  "duration": 152286117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abz",
      "offset": 18
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter_lastname(String)"
});
formatter.result({
  "duration": 121367806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter_password(String)"
});
formatter.result({
  "duration": 227481976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 14
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select_day(String)"
});
formatter.result({
  "duration": 113391891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select_month(String)"
});
formatter.result({
  "duration": 100945393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1980",
      "offset": 15
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select_year(String)"
});
formatter.result({
  "duration": 89592544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "68 AD",
      "offset": 17
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter_address(String)"
});
formatter.result({
  "duration": 206438901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Noida",
      "offset": 14
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter_city(String)"
});
formatter.result({
  "duration": 142697215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alaska",
      "offset": 16
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select_state(String)"
});
formatter.result({
  "duration": 92676171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000",
      "offset": 13
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter_zip(String)"
});
formatter.result({
  "duration": 69718187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9990017896",
      "offset": 16
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter_mobile(String)"
});
formatter.result({
  "duration": 163318585,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_click_on_Register_button()"
});
formatter.result({
  "duration": 1312124802,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_shoould_be_login_and_will_see_Sign_out()"
});
formatter.result({
  "duration": 4324824405,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat com.freecrm.qa.pages.PostLoginPage.validateSignOutLink(PostLoginPage.java:22)\r\n\tat com.freecrm.qa.stepdefinitions.RegistrationPageStepDefinition.i_shoould_be_login_and_will_see_Sign_out(RegistrationPageStepDefinition.java:125)\r\n\tat ✽.Then I shoould be login and will see Sign out(Register.feature:48)\r\n",
  "status": "failed"
});
