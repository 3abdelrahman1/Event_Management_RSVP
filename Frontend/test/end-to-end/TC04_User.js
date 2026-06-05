 import { expect } from 'chai';
 import { Builder, By, until } from 'selenium-webdriver';
 
  const loginPage_Logo = By.xpath('//h5[text()="Login"]');
  const loginSubmit=By.xpath('//*[@type="submit"]');
  const EmailText=By.css('input[type = "text"]');
  const passwordText=By.css('input[type = "password"]');
  const logOutButton=By.xpath('//*[@type="button" and text()="Logout"]');
  const RSVPbutton=By.xpath('//button[text()="RSVP"]');
  const postcards = By.xpath('//div[contains(@class, "MuiCard-root")]');
  const cardRSVPED=By.xpath('//p[contains(text(), "You have RSVPed to this event.")]');
describe('RSVP functionality', function() {
  let driver;
  const url = 'http://localhost:3000';

    before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
      await driver.get(url);
      await driver.wait(until.elementLocated(loginPage_Logo), 5000);
      const login = await driver.findElement(loginSubmit);
      const email= await driver.findElement(EmailText);
      const password=await driver.findElement(passwordText);
      await email.sendKeys('john.doe@example.com');
      await password.sendKeys('password123');
      await login.click();  
     await driver.wait(until.elementLocated(postcards), 5000);
    });
  
    beforeEach(async function() {
 
     await driver.wait(until.elementLocated(postcards), 5000);
    });
  
    after(async function() {
      await driver.quit();
    });
  
    it(" should test RSVP Button is clickable ",  async function() {
      const postcard=await driver.findElements(postcards);
      const firstCardRSVPbUTTON=await postcard[0].findElement(RSVPbutton);
      await firstCardRSVPbUTTON.click(); 
     await driver.wait(
    async () => {
      const messages = await postcard[0].findElements(cardRSVPED);
      return messages.length > 0;
    }, 
    5000,
    "RSVP message did not appear within 5 seconds"
  );
      const RSVP_Message = await postcard[0].findElement(cardRSVPED);
      const RSVP_button=await postcard[0].findElements(RSVPbutton);
      const messageIsDisplayed = await RSVP_Message.isDisplayed();
     
      expect(messageIsDisplayed).to.be.true;
      expect(RSVP_button.length).to.equal(0);
    });
     
     
      it("should validate date of Event",async function(){
      const dateText = await driver.findElements(By.xpath('//div[contains(@class, "MuiCard-root")]//h6[2]'));
      //  Convert strings to Date objects
      
      const cutoffDate = new Date('2025-12-31');
      const futureDate = new Date('2030-12-31');
      for(let i =0;i<dateText.length;i++){
      const date =await dateText[i].getText();
      const actualDate = new Date(date);
      expect(actualDate.getTime()).to.be.above(cutoffDate.getTime());
      expect(actualDate.getTime()).to.be.below(futureDate.getTime());
      }
      });

it("should validate Event description is visible",async function(){
      const eventDescription = await driver.findElements(By.xpath('//div[contains(@class, "MuiCard-root")]//p[1]'));
      for(let i=0;i<eventDescription.length;i++){
        const eventDisplayed = await eventDescription[i].isDisplayed();
        expect(eventDisplayed).to.be.true;
      }
      });

    
      
  
});
       
