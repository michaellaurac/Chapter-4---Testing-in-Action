// Use 'npx mocha' to run these tests from the project directory

// The following line allows recognition of mocha commands by eslint
/* eslint-env mocha */
const deepEqual = require('deep-equal');
const wish = require('wish');
const { checkHand, valuesFromHand, highestCount, multiplesIn, isPair } = require('../check-hand');

describe('valuesFromHand()', function () {
  it('returns just the values from a hand', function () {
    const result = valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
    wish(deepEqual(result, ['2', '3', '4', '5', '2']));
  });
});

describe('highestCount()', function () {
  it('returns count of the most common card from array', function () {
    const result = highestCount(['2', '3', '4', '5', '2']);
    wish(result === 2);
  });
});

describe('multiplesIn()', function () {
  it('finds a duplicate', function () {
    const result = multiplesIn(['2-H', '3-C', '4-D', '5-H', '2-C']);
    wish(result === 2);
  });
});

describe('isPair()', function () {
  it('finds a pair', function () {
    const result = isPair(['2-H', '3-C', '4-D', '5-H', '2-C']);
    wish(result);
  });
});

describe('checkHand()', function () {
  it('handles pairs', function () {
    const result = checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
    wish(result === 'pair');
    const anotherResult = checkHand(['3-H', '3-C', '4-D', '5-H', '2-C']);
    wish(anotherResult === 'pair');
  });
  it('handles three of a kind', function () {
    const result = checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']);
    wish(result === 'three of a kind');
  });
});

/*
// not just multiples
const checkStraightFlush = function () {
  return false;
};
const checkFullHouse = function () {
  return false;
};
const checkFlush = function () {
  return false;
};
const checkStraight = function () {
  return false;
};
const checkTwoPair = function () {
  return false;
};

// just multiples
const checkFourOfKind = function () {
  return false;
};
const checkThreeOfKind = function () {
  return false;
};
const checkPair = function () {
  return false;
};

// get just the values
const getValues = function (hand) {
  console.log(hand);
  const values = [];
  for (let i = 0; i < hand.length; i++) {
    console.log(hand[i]);
    values.push(hand[i][0]);
  }
  console.log(values);
  return values;
};

const countDuplicates = function (values) {
  console.log('values are: ' + values);
  let numberOfDuplicates = 0;
  let duplicateOfThisCard;
  for (let i = 0; i < values.length; i++) {
    duplicateOfThisCard = 0;
    console.log(numberOfDuplicates);
    console.log(duplicateOfThisCard);
    if (values[i] === values[0]) {
      duplicateOfThisCard += 1;
    }
    if (values[i] === values[1]) {
      duplicateOfThisCard += 1;
    }
    if (values[i] === values[2]) {
      duplicateOfThisCard += 1;
    }
    if (values[i] === values[3]) {
      duplicateOfThisCard += 1;
    }
    if (values[i] === values[4]) {
      duplicateOfThisCard += 1;
    }
    if (duplicateOfThisCard > numberOfDuplicates) {
      numberOfDuplicates = duplicateOfThisCard;
    }
  }
  return numberOfDuplicates;
};

const checkHand = function (hand) {
  const values = getValues(hand);
  const number = countDuplicates(values);
  console.log(number);

  if (checkStraightFlush(hand)) {
    return 'straight flush';
  } else if (number === 4) {
    return 'four of a kind';
  } else if (checkFullHouse(hand)) {
    return 'full house';
  } else if (checkFlush(hand)) {
    return 'flush';
  } else if (checkStraight(hand)) {
    return 'straight';
  } else if (number === 3) {
    return 'three of a kind';
  } else if (checkTwoPair(hand)) {
    return 'two pair';
  } else if (number === 2) {
    return 'pair';
  } else {
    return 'high card';
  }
};
*/
