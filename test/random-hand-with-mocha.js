// Use 'npx mocha' to run these tests from the project directory
// Use 'npx mocha -w' once to run these tests from the project
// directory each time there is a change in the code

// The following line allows recognition of mocha commands by ESLint
/* eslint-env mocha */
const deepEqual = require('deep-equal');
const wish = require('wish');
const {
  buildCardArray,
  spliceCard,
  randomHand
} = require('../random-hand');

describe('buildCardArray()', function () {
  it('gives a card array', function () {
    wish(deepEqual(buildCardArray(), [
      '1-H', '1-D', '1-S', '1-C',
      '2-H', '2-D', '2-S', '2-C',
      '3-H', '3-D', '3-S', '3-C',
      '4-H', '4-D', '4-S', '4-C',
      '5-H', '5-D', '5-S', '5-C',
      '6-H', '6-D', '6-S', '6-C',
      '7-H', '7-D', '7-S', '7-C',
      '8-H', '8-D', '8-S', '8-C',
      '9-H', '9-D', '9-S', '9-C',
      '10-H', '10-D', '10-S', '10-C',
      'J-H', 'J-D', 'J-S', 'J-C',
      'Q-H', 'Q-D', 'Q-S', 'Q-C',
      'K-H', 'K-D', 'K-S', 'K-C'
    ]));
  });
});
describe('spliceCard()', function () {
  it('returns two things', function () {
    wish(spliceCard(buildCardArray()).length === 2);
  });
  it('returns the selected card', function () {
    wish(spliceCard(buildCardArray())[0].match(/\w{1,2}-[HDSC]/));
  });
  it('returns an array with one card gone', function () {
    wish(spliceCard(buildCardArray())[1].length === buildCardArray().length - 1);
  });
});
describe('randomHand()', function () {
  it('returns 5 random cards', function () {
    wish(randomHand().length === 5);
  });
});
