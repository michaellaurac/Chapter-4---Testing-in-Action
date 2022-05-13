// Use 'npx mocha' to run these tests from the project directory
// Use 'npx mocha -w' once to run these tests from the project
// directory each time there is a change in the code

// The following line allows recognition of mocha commands by ESLint
/* eslint-env mocha */
// const deepEqual = require('deep-equal');
const wish = require('wish');
const {
  doIt,
  rC,
  rV,
  rS
} = require('../random-hand');

describe('doIt()', function () {
  it('returns something with a length of 5', function () {
    wish(doIt().length === 5);
  });
});
describe('rC()', function () {
  it('returns match for card', function () {
    wish(rC().match(/\w{1,2}-[HDSC]/));
  });
});
describe('rV()', function () {
  it('returns match for a card value', function () {
    wish(rV().match(/\w{1,2}/));
  });
});
describe('rS()', function () {
  it('returns match for suit', function () {
    wish(rS().match(/[HDSC]/));
  });
});
