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
  "description": "As an end-user of the Automation Practice\nI want to register to the application\nIn order to use the application features.",
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
  "name": "I enter \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select \"\u003cDay_of_DOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select \"\u003cMonth_of_DOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select \"\u003cYear_of_DOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter \"\u003cAddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I enter \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter \"\u003cZip_Postal_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \"\u003cMobile_Number\u003e\"",
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
        "March",
        "1980",
        "68 AD",
        "Noida",
        "Alaska",
        "12346",
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
        "May",
        "1984",
        "R196",
        "Delhi",
        "Arizona",
        "65478",
        "9990016789"
      ],
      "line": 53,
      "id": "user-registration;register-to-the-site;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4120257368,
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
  "duration": 9448190575,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_should_see_site_logo()"
});
formatter.result({
  "duration": 39046241,
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
  "name": "I enter \"Abz\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter \"Abz\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \"password\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select \"7\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select \"March\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select \"1980\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter \"68 AD\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I enter \"Noida\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select \"Alaska\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter \"12346\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \"9990017896\"",
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
  "duration": 2532474400,
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
  "duration": 180834239,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.click_on_create_an_account_button()"
});
formatter.result({
  "duration": 1623467702,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_sould_see_application_registration_page()"
});
formatter.result({
  "duration": 38544107,
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
  "duration": 93203676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abz",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 59075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abz",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 70562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 42665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 97613756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "March",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 81524550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1980",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 63430912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "68 AD",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 57433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Noida",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 59895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alaska",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 64378977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12346",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 56203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9990017896",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 72613,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_click_on_Register_button()"
});
formatter.result({
  "duration": 1227439,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.freecrm.qa.stepdefinitions.RegistrationPageStepDefinition.i_click_on_Register_button(RegistrationPageStepDefinition.java:68)\r\n\tat ✽.And I click on Register button(Register.feature:47)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_shoould_be_login_and_will_see_Sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2175016214,
  "status": "passed"
});
formatter.before({
  "duration": 2878387199,
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
  "duration": 7929295532,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_should_see_site_logo()"
});
formatter.result({
  "duration": 33610971,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Register to the site",
  "description": "",
  "id": "user-registration;register-to-the-site;;3",
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
  "name": "Enter \"qasimran114@gmail.com\" for the signup",
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
  "name": "I select \"Mrs.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter \"Sab\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter \"Sab\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \"password\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select \"16\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select \"May\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select \"1984\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter \"R196\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I enter \"Delhi\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select \"Arizona\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter \"65478\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \"9990016789\"",
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
  "duration": 2231071830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qasimran114@gmail.com",
      "offset": 7
    }
  ],
  "location": "RegistrationPageStepDefinition.enter_for_the_signup(String)"
});
formatter.result({
  "duration": 193087291,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.click_on_create_an_account_button()"
});
formatter.result({
  "duration": 1647191066,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_sould_see_application_registration_page()"
});
formatter.result({
  "duration": 39582425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 112818895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sab",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 56203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sab",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 59895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 56203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 72954225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 65679438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1984",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 66322694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R196",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 43896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 32819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arizona",
      "offset": 10
    }
  ],
  "location": "RegistrationPageStepDefinition.i_select(String)"
});
formatter.result({
  "duration": 64183292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "65478",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 45126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9990016789",
      "offset": 9
    }
  ],
  "location": "RegistrationPageStepDefinition.i_enter(String)"
});
formatter.result({
  "duration": 32409,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_click_on_Register_button()"
});
formatter.result({
  "duration": 140712,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.freecrm.qa.stepdefinitions.RegistrationPageStepDefinition.i_click_on_Register_button(RegistrationPageStepDefinition.java:68)\r\n\tat ✽.And I click on Register button(Register.feature:47)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_shoould_be_login_and_will_see_Sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2042247755,
  "status": "passed"
});
});