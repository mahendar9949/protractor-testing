/**
 * Created by Mahendar on 15/10/2018.
 */
// page objects
const ClientListPage = function () {
    this.SignIn = function () {
        var span = element(by.id('nav-link-accountList'));
        browser.actions().mouseMove(span).click().perform();
    };
    this.myAccount = function () {
        var span = element(by.id('nav-link-accountList'));
        browser.actions().mouseMove(span).perform();
        var span1 = element(by.xpath("//span[.= 'Your Account']"));
        browser.actions().mouseMove(span1).click().perform();
    };
    this.createAccountSubmit = function () {
        return element(by.id('createAccountSubmit')).click();
    };
    this.CreateButton = function () {
        return element(by.id('continue')).click();
    };
    this.createamazonAccount = function () {
        element(by.id('ap_customer_name')).sendKeys('Mahendar');
        var randVal = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        var email_value = 'mahendar7952+' + randVal + '@gmail.com';
        element(by.id('ap_email')).sendKeys(email_value);
        browser.executeScript(function (email_value) {
            window.sessionStorage['something'] = email_value;
        }, email_value);
        element(by.id('ap_password')).sendKeys('Amazon@123');
        element(by.id('ap_password_check')).sendKeys('Amazon@123');
    };
    this.Validation = element(by.className('a-alert-content'));
};
module.exports = new ClientListPage();