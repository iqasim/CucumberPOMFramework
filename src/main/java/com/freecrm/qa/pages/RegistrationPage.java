package com.freecrm.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.freecrm.qa.base.TestBase;

public class RegistrationPage extends TestBase
{
	
	@FindBy(id="id_gender1")
	WebElement Male;
	
	@FindBy(id="id_gender2")
	WebElement Female;
	
	@FindBy(xpath="//h1[contains(text(),'Create an account')]")
	WebElement headingCreateAnAccount;
	
	@FindBy(xpath="//h3[contains(text(),'personal')]")
	WebElement headingPersonalInformation;
	
	@FindBy(xpath="//label[contains(text(),'Sign up for our newsletter!')]")
	WebElement headingNewsLetter;
	
	@FindBy(xpath="//input[@id='customer_firstname']")
	WebElement firstName;
	
	@FindBy(xpath="//input[@id='customer_lastname']")
	WebElement lastName;
	
	@FindBy(id="passwd")
	WebElement password;
	
	@FindBy(xpath="//input[@id='address1']")
	WebElement address1;
	
	@FindBy(xpath="//input[@id='city']")
	WebElement city;
	
	@FindBy(xpath="//textarea[@id='other']")
	WebElement additionalInformation;
	
	@FindBy(xpath="//input[@id='postcode']")
	WebElement zipPostalCode;
	
	@FindBy(xpath="//input[@id='phone_mobile']")
	WebElement mobile;
	
	@FindBy(xpath="//button[@id='submitAccount']")
	WebElement registerButton;	
	
	
	
	Select select; 
	
	public RegistrationPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	public void selectGender(String Gender)
	{
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].scrollIntoView()", headingCreateAnAccount);	
		Male.click();
		/*if (Gender.equals("Mr."))
		{
			Male.click();
		}else
		{
			Female.click();
		}*/
	}
	
	public boolean validateHeadingPersonalInformation()
	{
		return headingPersonalInformation.isDisplayed();
	}
	
	public boolean validateHeadingCreateAnAccount()
	{
		return headingCreateAnAccount.isDisplayed();
	}
	
	public void enterFirstName(String Firstname)
	{
		firstName.clear();
		firstName.sendKeys(Firstname);
	}
	
	public void enterLastName(String Lastname)
	{
		lastName.clear();
		lastName.sendKeys(Lastname);
	}
	
	public void enterPassword(String Password)
	{
		password.clear();
		password.sendKeys(Password);
	}
	
	public void selectBirthDay(String Day_of_DOB)
	{
		select = new Select(driver.findElement(By.xpath("//select[@id='days']")));
		select.selectByValue(Day_of_DOB);
	}
	
	public void selectBirthMonth(String Month_of_DOB)
	{
		select = new Select(driver.findElement(By.xpath("//select[@id='months']")));
		select.selectByVisibleText(Month_of_DOB);
	}
	
	public void selectBirthYear(String Year_of_DOB)
	{
		select = new Select(driver.findElement(By.xpath("//select[@id='years']")));
		select.selectByVisibleText(Year_of_DOB);
	}
	
	public void enterAddress(String Address)
	{
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].scrollIntoView()", additionalInformation);
		
		address1.clear();
		address1.sendKeys(Address);
	}
	
	public void enterCity(String City)
	{
		city.clear();
		city.sendKeys(City);
	}
	
	public void selectState(String State)
	{
		select = new Select(driver.findElement(By.xpath("//select[@id='id_state']")));
		select.deselectByVisibleText(State);
	}
	
	public void enterZipCode(String Zip_Postal_Code)
	{
		city.clear();
		city.sendKeys(Zip_Postal_Code);
	}
	
	public void enterMobileNumber(String Mobile_Number)
	{
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].scrollIntoView()", registerButton);
		
		mobile.clear();
		mobile.sendKeys(Mobile_Number);
	}
	
	public PostLoginPage clickRegisterButton()
	{
		registerButton.click();
		return new PostLoginPage();
	}
	

}
