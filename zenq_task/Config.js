exports.config = {
    framework: 'jasmine2',
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/newAccount.js'],
    multiCapabilities: [{
        browserName: 'chrome',
        "crmuxdriverVersion": '0.1.0',
        'shardTestFiles': true,
        version: '63.0',
        platform: 'OS X 10.13',
        name: "Chrome-test",
    }, ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 3000000
    },
    onPrepare: function () {
        global.EC = protractor.ExpectedConditions;
        browser.driver.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },
};