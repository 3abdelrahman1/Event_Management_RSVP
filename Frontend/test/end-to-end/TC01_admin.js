  import { expect } from 'chai';
  import { Builder, By, until } from 'selenium-webdriver';
  
  const dashBoard = By.xpath('//a[@href="/dashboard"]');
  const home = By.xpath('//a[@href="/"]');
  const logo = By.xpath('//h4[text()="Create New Event"]');
  const name =By.css ('input[name="name"]');
  const desctiption=By.css ('textarea[name="description"]');
  const date=By.css ('input[name="date"]');
  const time=By.css ('input[name="time"]');
  const location =By.css ('input[name="location"]');
  const submit=By.css('button[type="submit"]');
  const loginPage_Logo = By.xpath('//h5[text()="Login"]');
  const loginSubmit=By.xpath('//*[@type="submit"]');
  const EmailText=By.css('input[type = "text"]');
  const passwordText=By.css('input[type = "password"]');
  const logOutButton=By.xpath('//*[@type="button" and text()="Logout"]');
  const postcards = By.xpath('//div[contains(@class, "MuiCard-root")]');
 describe('admin functionality test', function() {
  let driver;
  const url = 'http://localhost:3000';

  before(async function() {
   driver = await new Builder().forBrowser('chrome').build();
   await driver.get(url);
   await driver.wait(until.elementLocated(loginPage_Logo));
   const Email= await driver.findElement(EmailText);
   const password= await driver.findElement(passwordText);
   await Email.sendKeys('adminaa.doelar@example.com');

   await password.sendKeys('password123');
   const loginButton = await driver.findElement(loginSubmit);
   await loginButton.click();  
  });

 /* beforeEach(async function() {
    
  });
*/
  after(async function() {
    await driver.quit();
  });

//admin functionality
 
it("create new event with old date",async function(){
 await driver.wait(until.elementLocated(dashBoard), 5000);
  const Dashboard =  await driver.findElement(dashBoard);
  await Dashboard.click();
  await driver.wait(until.elementLocated(logo), 5000);
  const Event_Name = await driver.findElement(name);
  await Event_Name.sendKeys('giza event');
   await driver.wait(until.elementLocated(desctiption), 5000);
  const Description = await driver.findElement(desctiption);
  await Description.sendKeys('event located at giza pyramids first of october');
  const Date = await driver.findElement(date);
  await Date.sendKeys('06081998');
  const Time = await driver.findElement(time);
  await Time.sendKeys('1130p');
  const Location = await driver.findElement(location);
  await Location.sendKeys('end of haram 22 street 4th block');
  const submitButton =  await driver.findElement(submit);
  await submitButton.click();
   await driver.wait(until.elementLocated(postcards), 5000);
  const postcard = await driver.findElements(postcards);
  const postcardIsDisplayed= await postcard[0].isDisplayed();
  expect(postcardIsDisplayed).to.be.false;
  }); 




it("create new event with very far date ",async function(){
  await driver.wait(until.elementLocated(dashBoard), 5000);
  const Dashboard =  await driver.findElement(dashBoard);
  await Dashboard.click();
  await driver.wait(until.elementLocated(logo), 5000);
  const Event_Name = await driver.findElement(name);
  await Event_Name.sendKeys('giza event');
  await driver.wait(until.elementLocated(desctiption), 5000);
  const Description = await driver.findElement(desctiption);
  await Description.sendKeys('event located at giza pyramids first of october');
  const Date = await driver.findElement(date);
  await Date.sendKeys('06086060');
  const Time = await driver.findElement(time);
  await Time.sendKeys('1130p');
  const Location = await driver.findElement(location);
  await Location.sendKeys('end of haram 22 street 4th block');
  const submitButton=  await driver.findElement(submit);
  await submit.click();
   await driver.wait(until.elementLocated(postcards), 5000);
  
const postcardIsDisplayed= await postcard[0].isDisplayed();
  expect(postcardIsDisplayed).to.be.false;
  }); 

it("create new event with same name",async function(){
  await driver.wait(until.elementLocated(dashBoard), 5000);
  const Dashboard =  await driver.findElement(dashBoard);
  await Dashboard.click();
  await driver.wait(until.elementLocated(logo), 5000);
  const Event_Name = await driver.findElement(name);
  await Event_Name.sendKeys('giza event');
  await driver.wait(until.elementLocated(desctiption), 5000);
  const Description = await driver.findElement(desctiption);
  await Description.sendKeys('event located at giza pyramids first of october');
  const Date = await driver.findElement(date);
  await Date.sendKeys('06081998');
  const Time = await driver.findElement(time);
  await Time.sendKeys('1130p');
  const Location = await driver.findElement(location);
  await Location.sendKeys('end of haram 22 street 4th block');
  const submitButton =  await driver.findElement(submit);
  await submitButton.click();
   await driver.wait(until.elementLocated(postcards), 5000);
  const postcard = await driver.findElements(postcards);
  const postcardIsDisplayed= await postcard[0].isDisplayed();
  expect(postcardIsDisplayed).to.be.false;
  }); 

  
  it("should successfuly delete event",async function(){
    await driver.wait(until.elementLocated(home), 5000);
  const homeButton =  await driver.findElement(home);
  homeButton.click();
  await driver.wait(until.elementLocated(postcards), 5000);
  const postcard = await driver.findElements(postcards); 
  const cardsNumber=postcard.length;
  expect(cardsNumber).to.be.at.least(1);
  const Delete_button = await postcard[0].findElement(By.xpath('//button[text()="Delete"]'));
   await Delete_button.click();
   await driver.wait(until.elementLocated(postcards), 5000);
   const cardDeleted=postcard.length
 const postcardIsDisplayed= await postcard[0].isDisplayed();
  expect(cardsNumber).to.be.equal(cardDeleted);
  });

 

  
});
