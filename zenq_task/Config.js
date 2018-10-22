exports.config = {
    framework: 'jasmine2',
    directConnect: true,
    // sauceUser: 'mahendar.baddam@scriptbees.com',
    // sauceKey: "efa0b361-f776-48e1-9c0c-09c778130d9b",
    // SeleniumAddress: 'https://ondemand.saucelabs.com:80',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/amazon.js'],
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
        /*var MailListener = require("mail-listener2");
        var mailListener = new MailListener({
            username: "mahendar7952@gmail.com", // email or userName
            password: "mahi.baddam", // password
            host: "mailosaur.io", // e.g. imap.gmail.com
            port: 993,
            tls: true,
            fetchUnreadOnStart: true
        });
        mailListener.on("server:connected", function () {
            console.log("imapConnected");
        });
        mailListener.on("server:disconnected", function () {
            console.log("imapDisconnected");
        });
        mailListener.on("error", function (err) {
            console.log(err);
        });
        var count = 0;
        mailListener.on("mail", function (mail, seqno, attributes) {
            var mailuid = attributes.uid;
            var toMailbox = '[Gmail]/All Mail';
            var i = ++count;
            if (i > 2) {
                mailListener.stop(); // start listening
                return;
            }
            console.log('attempting to mark msg read/seen');
            mailListener.imap.addFlags(mailuid, '\\Seen', function (err) {
                if (err) {
                    console.log('error marking message read/SEEN');
                    return;
                }
                console.log('moving ' + (seqno || '?') + ' to ' + toMailbox);
                mailListener.imap.move(mailuid, toMailbox, function (err) {
                    if (err) {
                        console.log('error moving message');
                        return;
                    }
                    console.log('moved ' + (seqno || '?'), mail.subject);
                });
            });
        });
        mailListener.start(); // start listening
        setTimeout(function () {
            mailListener.stop(); // start listening
        }, 60 * 1000);
        global.mailListener = mailListener;*/
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
    /* params: {
         getLastEmail: function () {
             const deferred = protractor.promise.defer();
             console.log("Waiting for email...");
             var count = 0;
             mailListener.on("mail", function (mail, seqno, attributes) {
                 var mailuid = attributes.uid;
                 var toMailbox = '[Gmail]/All Mail';
                 var i = ++count;
                 if (i > 2) {
                     mailListener.stop(); // start listening
                     return;
                 }
                 var testContent = {
                     i: i,
                     subject: mail.subject,
                     seqno: seqno,
                     uid: attributes.uid,
                     attributes: attributes,
                     text: mail.html
                 };
                 deferred.fulfill(mail);
             });
             return deferred.promise;
         }
     },*/
};