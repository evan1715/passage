const clunk = require('./utils/clunk');
const delay = require('./utils/delay');
const fruit = require('./fruit');
const store = require('./store');
const callFetch = require('./utils/callFetch');

module.exports = {
    clunk,
    delay,
    ...fruit,
    ...store,
    callFetch: callFetch.callFetch,
    configureFetch: callFetch.configureFetch,
};
