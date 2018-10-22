var auth = require('../env.json');
describe('Amazon Data driven Protractor Script', function () {
    it('Reading data from JASON file', function () {
        browser.ignoreSynchronization = true;
        browser.get(auth.url);
        browser.driver.manage().window().maximize();
        var span = element(by.id('nav-link-accountList'));
        browser.actions().mouseMove(span).click().perform();
        element(by.id('ap_email')).sendKeys(auth.usrName);
        element(by.id('ap_password')).sendKeys(auth.password);
        element(by.id('signInSubmit')).click();
        expect(browser.getCurrentUrl()).toContain('?ref_=nav_ya_signin&');
    });
});