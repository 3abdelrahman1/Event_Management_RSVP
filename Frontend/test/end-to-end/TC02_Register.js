import { expect } from 'chai';
import { Builder, By, until } from 'selenium-webdriver';

 const registerButton=By.linkText('Register');
  const registerLogo=By.xpath('//h5[text()="Register"]');
  const registerUsername=By.css('input[id = "username"]');
  const registerEmail=By.css('input[id = "email"]');
  const registerPassword=By.css('input[id = "password"]');
  const registerConfirm=By.css('input[id = "confirmPassword"]');
  const registerSubmit=By.css('button[type="submit"]');
  const loginPage_Logo = By.xpath('//h5[text()="Login"]');
describe('Register tests', function() {
  let driver;
  const url = 'http://localhost:3000';

  before(async function() {
  //  driver = await new Builder().forBrowser('chrome').build();
  });

  beforeEach(async function() {
    await driver.get(url);
    await driver.wait(until.elementLocated(registerButton), 5000);
    const Register=await driver.findElement(registerButton);
    await Register.click() ;
    await driver.wait(until.elementLocated(registerLogo), 5000);
  
   
  });

  after(async function() {
    await driver.quit();
  });
  it("should Register Successfully",async function(){
    const Username= await driver.findElement(registerUsername);
    const email= await driver.findElement(registerEmail);
    const password=await driver.findElement(registerPassword);
    const confirm_password=await driver.findElement(registerConfirm);
    await Username.sendKeys('john_johnes2');
    await email.sendKeys('john.doe234@example.com2');
    await password.sendKeys('characters1234');
    await confirm_password.sendKeys('characters1234');
    const registSubmit=await driver.findElement(registerSubmit);
    await registSubmit.click();
    await driver.wait(until.elementLocated(loginPage_Logo), 5000);
    const login_page= await driver.findElement(loginPage_Logo);
    const logoDisplay=await login_page.isDisplayed();
    expect(logoDisplay).to.be.true;
  });

  it("should show 'Passwords don't match!' message",async function(){
    const Username= await driver.findElement(registerUsername);
    const password=await driver.findElement(registerPassword);
    const confirm_password=await driver.findElement(registerConfirm); 
    await Username.sendKeys('john_johnes2');
    await password.sendKeys('characters1234');
    await confirm_password.sendKeys('characters12345');
    await registerSubmit.click();
    let errorElement = await driver.wait(until.elementLocated(By.css('[class=error-banner]')), 5000);
    let errorText = await errorElement.getText();
    expect(errorText).to.equal("Passwords don't match!");
});
it("should disallow registering with same email twice",async function(){
    const Username= await driver.findElement(registerUsername);
    const email= await driver.findElement(registerEmail);
    const password=await driver.findElement(registerPassword);
    const confirm_password=await driver.findElement(registerConfirm);
    await Username.sendKeys('john_johnes');
    await email.sendKeys('john.doe234@example.com');
    await password.sendKeys('characters1234');
    await confirm_password.sendKeys('characters1234');
    await registerSubmit.click();
    let errorElement = await driver.wait(until.elementLocated(By.css('[class=error-banner]')), 5000);
    let errorText = await errorElement.getText();
    expect(errorText).to.equal("Registration failed.");
    
});
it("should display error message if register username less than 2 characters",async function(){

    const Username= await driver.findElement(registerUsername);
    const email= await driver.findElement(registerEmail);
    const password=await driver.findElement(registerPassword);
    const confirm_password=await driver.findElement(registerConfirm);
    await Username.sendKeys('a');
    await email.sendKeys('john.john@example.com');
    await password.sendKeys('password123');
    await confirm_password.sendKeys('password123');
    await registerSubmit.click();
    let errorElement = await driver.wait(until.elementLocated(By.className('error-banner')), 5000);
    let errorText = await errorElement.getText();
    expect(errorText).to.equal("Username field must be at least 3 characters");

  });
  it("should display error message if register password less than 8 characters",async function(){

    const Username= await driver.findElement(registerUsername);
    const email= await driver.findElement(registerEmail);
    const password=await driver.findElement(registerPassword);
    const confirm_password=await driver.findElement(registerConfirm);
    await Username.sendKeys('johnes_johnes');
    await email.sendKeys('john.doe334@example.com');
    await password.sendKeys('pas123');
    await confirm_password.sendKeys('pas123');
    await registerSubmit.click();
    let errorElement = await driver.wait(until.elementLocated(By.className('error-banner')), 5000);
    let errorText = await errorElement.getText();
    expect(errorText).to.equal("Password must be at least 8 characters long!");

  });
    it("should display error message if register password less than 3 numbers",async function(){

    const Username= await driver.findElement(registerUsername);
    const email= await driver.findElement(registerEmail);
    const password=await driver.findElement(registerPassword);
    const confirm_password=await driver.findElement(registerConfirm);
    await Username.sendKeys('johnes._johnes');
    await email.sendKeys('john.doe3345@example.com');
    await password.sendKeys('password12');
    await confirm_password.sendKeys('password12');
    await registerSubmit.click();
    let errorElement = await driver.wait(until.elementLocated(By.className('error-banner')), 5000);
    let errorText = await errorElement.getText();
    expect(errorText).to.equal("Password must have at least 3 numbers");

  });
   it("should display error message when leaving email empty",async function(){

    const Username= await driver.findElement(registerUsername);
    const email= await driver.findElement(registerEmail);
    const password=await driver.findElement(registerPassword);
    const confirm_password=await driver.findElement(registerConfirm);
    await Username.sendKeys('johnes._johnes');
    
    await password.sendKeys('password12');
    await confirm_password.sendKeys('password12');
    await registerSubmit.click();
    let errorElement = await driver.wait(until.elementLocated(By.className('error-banner')), 5000);
    let errorText = await errorElement.getText();
    expect(errorText).to.equal("Registration failed.");

  });

  });