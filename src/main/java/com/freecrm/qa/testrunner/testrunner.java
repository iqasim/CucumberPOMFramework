package com.freecrm.qa.testrunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(features = "Resources/features", glue={"com/freecrm/qa/stepdefinitions"}) 
/*plugin={"pretty", "html:test-output/target/cucumber-reports/cucumber-pretty", "json:test-output/target/cucumber-reports/CucumberTestReport.json"
		+ "rerun:test-output/target/cucumber-reports/rerun.txt"})*/

public class testrunner {
	
	private TestNGCucumberRunner testNGCucumberRunner;
	
	@BeforeClass(alwaysRun=true)
	public void setUp()
	{
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}
	
	@Test(groups="cucumber", description = "Runs Cucumber Features", dataProvider="features")
	public void feature(CucumberFeatureWrapper cucumberFeature)
	{
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}
	
	@DataProvider
	public Object[][] features()
	{
		return testNGCucumberRunner.provideFeatures();
	}
	
	@AfterClass(alwaysRun=true)
	public void teardown()
	{
		testNGCucumberRunner.finish();
	}
	

}
