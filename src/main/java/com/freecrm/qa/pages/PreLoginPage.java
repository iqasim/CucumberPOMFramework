package com.freecrm.qa.pages;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.freecrm.qa.base.TestBase;
import com.freecrm.qa.helper.Utilities;

import cucumber.api.DataTable;

public class PreLoginPage extends TestBase 
{
	
	@FindBy(xpath="//a[@class='login']")
	WebElement signInLink;
	
	@FindBy(xpath="//img[@class='logo img-responsive']")
	WebElement siteLogo;
	
	@FindBy(xpath="//label[contains(text(),'Email address')]//parent::div[@class='form-group form-ok']")
	WebElement emailAddressLabel;
	
	@FindBy(xpath="//input[@id='email']")
	WebElement emailAddressField;
	
	@FindBy(xpath="//input[@id='passwd']")
	WebElement passwordField;
	
	@FindBy(xpath="//button[@id = 'SubmitLogin']")
	WebElement signInButton;
	
		public PreLoginPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public boolean validateSiteLogo()
	{
		boolean logoState = siteLogo.isDisplayed();
		return logoState;
	}
	
	public AuthenticationPage ClickOnSignInBtnNewUser()
	{
		signInLink.click();
		return new AuthenticationPage();
	}
	
	public PostLoginPage ClickOnSignInBtn()
	{
		signInLink.click();
		return new PostLoginPage();
	}
	
	public void enterUserNameandPassword(DataTable loginCred)
	{
		List<List<String>> dataValues = loginCred.raw();
		Utilities.scrollToElement(emailAddressField);
		emailAddressField.clear();
		emailAddressField.sendKeys(dataValues.get(0).get(0));
		passwordField.clear();
		passwordField.sendKeys(dataValues.get(0).get(1));
	}
	
	public void enterUserNameandPasswordMap(DataTable loginCred)
	{
		for(Map<String, String> data: loginCred.asMaps(String.class, String.class))
		{
		Utilities.scrollToElement(emailAddressField);
		emailAddressField.clear();
		emailAddressField.sendKeys(data.get("username"));
		passwordField.clear();
		passwordField.sendKeys(data.get("password"));
		}
	}
	
	
	
	public PostLoginPage clickonSubmitButton()
	{
		signInButton.click();
		return new PostLoginPage();
	}
	

}
