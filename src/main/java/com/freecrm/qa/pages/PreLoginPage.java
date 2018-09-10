package com.freecrm.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.freecrm.qa.base.TestBase;

public class PreLoginPage extends TestBase 
{
	
	@FindBy(xpath="//a[@class='login']")
	WebElement SignInButton;
	
	@FindBy(xpath="//img[@class='logo img-responsive']")
	WebElement siteLogo;
	
	public PreLoginPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public boolean validateSiteLogo()
	{
		boolean logoState = siteLogo.isDisplayed();
		return logoState;
	}
	
	
	public AuthenticationPage ClickOnSignInBtn()
	{
		SignInButton.click();
		return new AuthenticationPage();
	}

}
