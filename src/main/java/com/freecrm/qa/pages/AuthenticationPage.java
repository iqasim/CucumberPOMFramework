package com.freecrm.qa.pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.freecrm.qa.base.TestBase;

public class AuthenticationPage extends TestBase {
	
	@FindBy(xpath="//input[@id='email_create']")
	WebElement emailAddress;
	
	@FindBy(xpath="//button[@id='SubmitCreate']")
	WebElement createAccountBtn;
	
	public AuthenticationPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public boolean validateEmailId()
	{
		return emailAddress.isDisplayed();
	}
	
	public void enterEmailId(String Email_id)
	{
		emailAddress.clear();
		emailAddress.sendKeys(Email_id);
	}
	
	public RegistrationPage clickOncreateAccountBtn()
	{
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].scrollIntoView();", createAccountBtn);
		
		createAccountBtn.click();
		return new RegistrationPage();
	}
	
	
}
