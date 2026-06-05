import { expect } from 'chai';
import { Builder, By, until } from 'selenium-webdriver'; 
 
 
 const loginPage_Logo = By.xpath('//h5[text()="Login"]');
  const loginSubmit=By.xpath('//*[@type="submit"]');
  const EmailText=By.css('input[type = "text"]');
  const passwordText=By.css('input[type = "password"]');
  const logOutButton=By.xpath('//*[@type="button" and text()="Logout"]');
  const postcards = By.xpath('//div[contains(@class, "MuiCard-root")]');

  describe('EMS login unit tests', function() {
  let driver;
  const url = 'http://localhost:3000';
 before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  beforeEach(async function() {
    await driver.get(url);
    await driver.wait(until.elementLocated(loginPage_Logo), 5000);
   
  });

  after(async function() {
    await driver.quit();
  });

  it('should login successfull (happy scenario)', async function() {
    const title = await driver.getTitle();
    expect(title).to.equal('React App');
    const loginLogo = await driver.findElement(loginPage_Logo);
    const loginButton = await driver.findElement(loginSubmit);
    const email= await driver.findElement(EmailText);
    const password=await driver.findElement(passwordText);
    await email.sendKeys('john.doe@example.com');
    await password.sendKeys('password123');
    await loginButton.click();  
    driver.wait(until.elementLocated(logOutButton),5000);
    const logoutbutton=await driver.findElement(logOutButton);
    const logOutButtonDisplay= await logOutButton.isDisplayed();
    expect(logOutButtonDisplay).to.be.true;
    const postcard=await driver.findElements(postcards);
    expect(postcard.length).to.be.at.least(1);
    });

  it('should show "Invalid login credentials" warning entering invalid email  ', async function() {
     const email= await driver.findElement(EmailText);
      const password=await driver.findElement(passwordText);
      const loginButton = await driver.findElement(loginSubmit);
      await email.sendKeys('jo');
      await password.sendKeys('password123');
       await driver.wait(until.elementLocated(loginButton));
      await loginButton.click(); 
      await driver.wait(until.alertIsPresent(), 10000);
      let alert = await driver.switchTo().alert();
      let alertText = await alert.getText();
      expect(alertText).to.equal("Invalid login credentials");
      await alert.accept();
      const logoutbutton=await driver.findElement(logOutButton);
      const logOutButtonDisplay= await logOutButton.isDisplayed();
      expect(logOutButtonDisplay).to.be.false;
      
     });
it('should show "Invalid login credentials" warning entering invalid password  ', async function() {
     const email= await driver.findElement(EmailText);
      const password=await driver.findElement(passwordText);
      const loginButton = await driver.findElement(loginSubmit);
      await email.sendKeys('john.doe@example.com');
      await password.sendKeys('pas');
      await loginButton.click(); 
      await driver.wait(until.alertIsPresent(), 10000);
      let alert = await driver.switchTo().alert();
      let alertText = await alert.getText();
      expect(alertText).to.equal("Invalid login credentials");
      await alert.accept();
      const logoutButtons = await driver.findElements(logOutButton);
      expect(logoutButtons.length).to.equal(0);
      
     });




  });