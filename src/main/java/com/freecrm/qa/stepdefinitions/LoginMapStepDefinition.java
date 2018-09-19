package com.freecrm.qa.stepdefinitions;

import com.freecrm.qa.base.TestBase;
import com.freecrm.qa.pages.PostLoginPage;
import com.freecrm.qa.pages.PreLoginPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginMapStepDefinition extends TestBase {
	
	PreLoginPage preLoginPage = new PreLoginPage();
	PostLoginPage postLoginPage = new PostLoginPage();
	
	@When("^I click on Sign in link$")
	public void i_click_on_Signin_link(){
		preLoginPage.ClickOnSignInLink();
	}

	@When("^I enters the username and password from Datatable Map$")
	public void I_enters_the_username_and_password_from_Datatable_Map(DataTable loginData){
		preLoginPage.enterUserNameandPasswordMap(loginData);    
	}
	
	@When("^I Click on Sign In button$")
	public void i_Click_on_Sign_In_button() {
	    preLoginPage.ClickOnSignInBtn();
	}

	@Then("^I will be on home page and will see the Sign Out link$")
	public void i_will_be_on_home_page_and_will_see_the_Sign_Out_link() {
	    postLoginPage.validateSignOutLink();
	}

	@Then("^I click on the Sign out link$")
	public void i_click_on_the_Sign_out_link() {
		postLoginPage.clickOnSignOutLink();
	}
	

}
