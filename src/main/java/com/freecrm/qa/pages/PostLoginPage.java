package com.freecrm.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.freecrm.qa.base.TestBase;

public class PostLoginPage extends TestBase {
	
	@FindBy(xpath="//a[@title='Log me out']")
	WebElement signOutLink;
	
	
	public PostLoginPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public boolean validateSignOutLink()
	{
		return signOutLink.isDisplayed();
	}

}
