package com.freecrm.qa.stepdefinitions;

import org.openqa.selenium.By;
import org.testng.Assert;

import com.freecrm.qa.base.TestBase;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefinition extends TestBase{
	
	@Given("^I am on the Login page URL \"([^\"]*)\"$")
	public void i_am_on_the_Login_page_URL(String arg1) throws Throwable {
	    driver.get(arg1);
	    throw new PendingException();
	}

	@Then("^I should see Log In Page$")
	public void i_should_see_Log_In_Page() throws Throwable {
		boolean btnLogin = driver.findElement(By.xpath("//input[@value='Login']")).isDisplayed();
	    Assert.assertTrue(btnLogin, "Login button is not displayed");
	    throw new PendingException();
	}

	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I sould see application homepage$")
	public void i_sould_see_application_homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I sould see CRMPRO  NEWS message on home Page$")
	public void i_sould_see_CRMPRO_NEWS_message_on_home_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}
