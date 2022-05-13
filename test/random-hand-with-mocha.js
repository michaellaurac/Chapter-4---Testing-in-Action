// Use 'npx mocha' to run these tests from the project directory
// Use 'npx mocha -w' once to run these tests from the project
// directory each time there is a change in the code

// The following line allows recognition of mocha commands by ESLint
/* eslint-env mocha */
// const deepEqual = require('deep-equal');
const wish = require('wish');
const {
  randomHand,
  randomCard,
  randomValue,
  randomSuit
} = require('../random-hand');

describe('randomHand()', function () {
  it('returns 5 random cards', function () {
    wish(randomHand().length === 5);
  });
  for (let i = 0; i < 100; i++) {
    it('should not have the first two cards be the same', function () {
      const result = randomHand();
      wish(result[0] !== result[1]);
    });
  }
});
describe('randomCard()', function () {
  it('returns a random card', function () {
    wish(randomCard().match(/\w{1,2}-[HDSC]/));
  });
});
describe('randomValue()', function () {
  it('returns a random card value', function () {
    wish(randomValue().match(/\w{1,2}/));
  });
});
describe('randomSuit()', function () {
  it('returns a random card suit', function () {
    wish(randomSuit().match(/[HDSC]/));
  });
});
