package com.freecrm.qa.helper;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import com.freecrm.qa.base.TestBase;

public class Utilities extends TestBase {
	
	public static void scrollToElement(WebElement element)
	{
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].scrollIntoView()", element);
	}
	
	

}
