package com.freecrm.qa.testrunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

//dryRun = true checks the mapping of feature and step definition
//dryRun = false should be to execute the test cases
//monochrome = true generates the console output in a readable format
//strict = true failed the execution if any step is undefined in step definition

@CucumberOptions(features = "Resources/features", glue={"com/freecrm/qa/stepdefinitions"},
plugin={"pretty", "html:test-output/target/cucumber-reports/cucumber-pretty", "json:json-output/target/cucumber-reports/CucumberTestReport.json",
		"junit:junit_xml/cucumber-reports/cucumber.xml"}, dryRun = true, monochrome = true, strict = true)

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
