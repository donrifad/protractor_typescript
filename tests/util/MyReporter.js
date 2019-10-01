const myReporter = {

    jasmineStarted: function (suiteInfo) {

        console.log('Running suite with no of tests' + suiteInfo.totalSpecsDefined);

    },
    suiteStarted: function (result) {
        console.log('Suite started: ' + result.description);
    },

    specStarted: function (result) {
        console.log('Test started: ' + result.description);
    },

    specDone: async function (result) {

        var screenShot = '';

        console.log('Spec: ' + result.description + ' was ' + result.status);

        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure Reason: ' + result.failedExpectations[i].message);
            console.log('Failure Exception:' + result.failedExpectations[i].stack);
        }


    },
    suiteDone: function (result) {
        console.log('Suite: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    },
    jasmineDone: function () {
        console.log('Finished suite');

    }
};
module.exports = myReporter;
