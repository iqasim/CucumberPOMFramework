package com.freecrm.qa.stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.testng.Assert;

import com.freecrm.qa.base.TestBase;
import com.freecrm.qa.pages.AuthenticationPage;
import com.freecrm.qa.pages.PostLoginPage;
import com.freecrm.qa.pages.PreLoginPage;
import com.freecrm.qa.pages.RegistrationPage;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrationPageStepDefinition extends TestBase{
	
	AuthenticationPage ap = new AuthenticationPage();
	PreLoginPage pl = new PreLoginPage();
	RegistrationPage rp = new RegistrationPage();
	PostLoginPage postLoginPage = new PostLoginPage();
	
	@Given("^I am on the Pre-Login page URL \"([^\"]*)\"$")
	public void i_am_on_the_Pre_Login_page_URL(String arg1) throws Throwable {
	    driver.get(arg1);
	}

	@Then("^I should see site logo$")
	public void i_should_see_site_logo() {
	  Assert.assertTrue(pl.validateSiteLogo(), "Site logo is not displayed."); 
	}

	@When("^I click on SignIn button$")
	public void i_click_on_SignIn_button() {
	    pl.ClickOnSignInBtnNewUser();
	    Assert.assertTrue(ap.validateEmailId(), "Email Id field is not displayed.");
	}

	@When("^Enter \"([^\"]*)\" for the signup$")
	public void enter_for_the_signup(String arg1) {
	    ap.enterEmailId(arg1);
	}

	@When("^Click on create an account button$")
	public void click_on_create_an_account_button() {
	    ap.clickOncreateAccountBtn();
	    Assert.assertTrue(rp.validateHeadingCreateAnAccount(), "Create An Accoount Heading is not displayed.");
	}

	@Then("^I sould see application registration page$")
	public void i_sould_see_application_registration_page() {
	    Assert.assertTrue(rp.validateHeadingPersonalInformation(), "Your Personal Information Heading is not displayed.");
	}

	@Then("^I select \"([^\"]*)\"$")
	public void i_select(String arg1) {
	    rp.selectGender(arg1);
	}

	@Then("^I enter_firstname \"([^\"]*)\"$")
	public void i_enter_firstname(String arg1) {
	    rp.enterFirstName(arg1);
	}

	@Then("^I enter_lastname \"([^\"]*)\"$")
	public void i_enter_lastname(String arg1) {
	    rp.enterLastName(arg1);
	}

	@Then("^I enter_password \"([^\"]*)\"$")
	public void i_enter_password(String arg1) {
	    rp.enterPassword(arg1);
	}

	@Then("^I select_day \"([^\"]*)\"$")
	public void i_select_day(String arg1) {
	    rp.selectBirthDay(arg1);
	}

	@Then("^I select_month \"([^\"]*)\"$")
	public void i_select_month(String arg1) {
	    rp.selectBirthMonth(arg1);
	}

	@Then("^I select_year \"([^\"]*)\"$")
	public void i_select_year(String arg1) {
	    rp.selectBirthYear(arg1);
	}

	@Then("^I enter_address \"([^\"]*)\"$")
	public void i_enter_address(String arg1) {
	    rp.enterAddress(arg1);
	}

	@Then("^I enter_city \"([^\"]*)\"$")
	public void i_enter_city(String arg1) {
	    rp.enterCity(arg1);
	}

	@Then("^I select_state \"([^\"]*)\"$")
	public void i_select_state(String arg1) {
	    rp.selectState(arg1);
	}

	@Then("^I enter_zip \"([^\"]*)\"$")
	public void i_enter_zip(String arg1) {
	    rp.enterZipCode(arg1);
	}

	@Then("^I enter_mobile \"([^\"]*)\"$")
	public void i_enter_mobile(String arg1) {
	    rp.enterMobileNumber(arg1);
	}
	

	@Then("^I click on Register button$")
	public void i_click_on_Register_button() {
	    rp.clickRegisterButton();
	}

	@Then("^I shoould be login and will see Sign out$")
	public void i_shoould_be_login_and_will_see_Sign_out() {
		postLoginPage.validateSignOutLink();
	}



}
