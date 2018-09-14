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
  "duration": 3608112212,
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
  "duration": 16111490992,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_should_see_site_logo()"
});
formatter.result({
  "duration": 67299698,
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
  "duration": 3950879847,
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
  "duration": 236703581,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.click_on_create_an_account_button()"
});
formatter.result({
  "duration": 2714857879,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_sould_see_application_registration_page()"
});
formatter.result({
  "duration": 66156836,
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
  "duration": 198737961,
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
  "duration": 101427,
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
  "duration": 91767,
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
  "duration": 61580,
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
  "duration": 115052401,
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
  "duration": 100338270,
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
  "duration": 200712162,
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
  "duration": 65807,
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
  "duration": 68221,
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
  "duration": 129705554,
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
  "duration": 67014,
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
  "duration": 83919,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_click_on_Register_button()"
});
formatter.result({
  "duration": 1748405,
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
  "duration": 1115048778,
  "status": "passed"
});
formatter.before({
  "duration": 2293604618,
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
  "duration": 15188554831,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_should_see_site_logo()"
});
formatter.result({
  "duration": 60700920,
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
  "duration": 4081732490,
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
  "duration": 239750007,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.click_on_create_an_account_button()"
});
formatter.result({
  "duration": 2198322594,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_sould_see_application_registration_page()"
});
formatter.result({
  "duration": 65988999,
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
  "duration": 173685542,
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
  "duration": 286773,
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
  "duration": 99012,
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
  "duration": 156971,
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
  "duration": 110352356,
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
  "duration": 99630094,
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
  "duration": 221237202,
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
  "duration": 94785,
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
  "duration": 52525,
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
  "duration": 99224990,
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
  "duration": 81503,
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
  "duration": 1605924,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.i_click_on_Register_button()"
});
formatter.result({
  "duration": 258397,
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
  "duration": 10906111991,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027IMRAN-PC\u0027, ip: \u0027192.168.43.153\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61710}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\Imran\\AppData\\Local\\Temp\\scoped_dir4280_863}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1c4849d17316dbf9b6a24abfea05b143\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:533)\r\n\tat com.freecrm.qa.stepdefinitions.ServiceHooks.endTest(ServiceHooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.freecrm.qa.testrunner.testrunner.feature(testrunner.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: java.lang.RuntimeException: Process refused to die after 10 seconds, and couldn\u0027t taskkill it: Timeout waiting for process to die\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:133)\r\n\tat org.openqa.selenium.os.ProcessUtils.killProcess(ProcessUtils.java:81)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.destroyHarder(UnixProcess.java:246)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.access$200(UnixProcess.java:200)\r\n\tat org.openqa.selenium.os.UnixProcess.destroy(UnixProcess.java:126)\r\n\tat org.openqa.selenium.os.CommandLine.destroy(CommandLine.java:153)\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:221)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:94)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\t... 43 more\r\nCaused by: org.openqa.selenium.os.ProcessUtils$ProcessStillAliveException: Timeout waiting for process to die\r\n\tat org.openqa.selenium.os.ProcessUtils.waitForProcessDeath(ProcessUtils.java:67)\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:129)\r\n\t... 51 more\r\nCaused by: java.lang.InterruptedException\r\n\tat java.lang.ProcessImpl.waitFor(ProcessImpl.java:451)\r\n\tat org.openqa.selenium.os.ProcessUtils$ProcessWaiter.run(ProcessUtils.java:154)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
});