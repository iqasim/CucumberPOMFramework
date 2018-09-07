package com.freecrm.qa.testrunner;

import com.freecrm.qa.base.TestBase;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class ServiceHooks {
	
	TestBase testBase;
	
	@Before
	public void initTest()
	{
		testBase = new TestBase();
		testBase.selectBrowser("chrome");
	}
	
	@After
	public void endTest()
	{
		TestBase.driver.quit();
	}

}
