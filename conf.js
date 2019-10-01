const myReporter = require('tests/util/MyReporter');
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // binary: 'PATH/To/your/binary',
            args: [
                '--disable-infobars', "--disable-gpu", "--start-maximized", '--disable-extensions'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },
    specs: [
        'tests/LoginTest.js'
    ],
    directConnect: true,
    onPrepare: function () {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().timeouts().implicitlyWait(5000);
        jasmine.getEnv().addReporter(myReporter);
    },
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
