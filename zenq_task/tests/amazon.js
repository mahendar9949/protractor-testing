const homepage1 = require('../pages/homepage.js');
describe('amazon page', () => {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('https://www.amazon.com');
        browser.driver.manage().window().maximize();
    });
    it(`Should successfully complete the registraion part`, () => {
        homepage1.SignIn();
        expect(browser.getCurrentUrl()).toContain('/ap/signin');
        homepage1.createAccountSubmit();
        homepage1.createamazonAccount();
        homepage1.CreateButton();
        expect(browser.getCurrentUrl()).toContain('new_account=1&');
        homepage1.myAccount();
        expect(browser.getCurrentUrl()).toContain('nav_youraccount_ya');
    });
});