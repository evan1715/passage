const clunk = require('./utils/clunk');
const delay = require('./utils/delay');
const fruit = require('./fruit');
const store = require('./store');

module.exports = { clunk, delay, ...fruit, ...store };
