package com.freecrm.qa.stepdefinitions;

import com.freecrm.qa.base.TestBase;
import com.freecrm.qa.pages.PostLoginPage;
import com.freecrm.qa.pages.PreLoginPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefinition extends TestBase {
	
	PreLoginPage preLoginPage = new PreLoginPage();
	PostLoginPage postLoginPage = new PostLoginPage();
	
	@When("^I click on Signin link$")
	public void i_click_on_Sign_in_link(){
		preLoginPage.ClickOnSignInBtn();
	}

	@When("^I enters username and password$")
	public void i_enters_the_username_and_password(DataTable loginData){
		preLoginPage.enterUserNameandPassword(loginData);	    
	}

	@Then("^I will be on home page and I will see the Sign Out link$")
	public void i_will_be_on_home_page_and_I_will_see_the_Sign_Out_link(){
		preLoginPage.clickonSubmitButton();
		postLoginPage.validateSignOutLink();
	}

}
