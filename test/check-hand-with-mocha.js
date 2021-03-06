// Use 'npx mocha' to run these tests from the project directory
// Use 'npx mocha -w' once to run these tests from the project
// directory each time there is a change in the code

// The following line allows recognition of mocha commands by ESLint
/* eslint-env mocha */
const deepEqual = require('deep-equal');
const wish = require('wish');
const {
  checkHand,
  valuesFromHand,
  highestCount,
  allCounts,
  multiplesIn,
  isTwoPair,
  isPair,
  isFullHouse,
  isTriple,
  isQuadruple,
  suitsFor,
  allTheSameSuit,
  isFlush,
  fourAway,
  noMultiples,
  cardsInSequence,
  isStraight,
  isStraightFlush
} = require('../check-hand');

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

describe('allCounts()', function () {
  it('returns the counts of all cards from array', function () {
    const result = allCounts(['2', '3', '4', '5', '2']);
    wish(deepEqual(result, [2, 1, 1, 1]));
  });
});

describe('multiplesIn()', function () {
  it('finds a duplicate', function () {
    const result = multiplesIn(['2-H', '3-C', '4-D', '5-H', '2-C']);
    wish(result === 2);
  });
});

describe('isTwoPair()', function () {
  it('finds two pair', function () {
    const result = isTwoPair(['2-D', '2-H', '3-H', '3-D', '8-D']);
    wish(result);
  });
});

describe('isPair()', function () {
  it('finds a pair', function () {
    const result = isPair(['2-H', '3-C', '4-D', '5-H', '2-C']);
    wish(result);
  });
});

describe('isFullHouse()', function () {
  it('handles full house', function () {
    const result = isFullHouse(['2-D', '2-H', '3-H', '3-D', '3-C']);
    wish(result);
  });
});

describe('isTriple()', function () {
  it('handles three of a kind', function () {
    const result = isTriple(['3-H', '3-C', '3-D', '5-H', '2-H']);
    wish(result);
  });
});

describe('isQuadruple()', function () {
  it('handles four of a kind', function () {
    const result = isQuadruple(['3-H', '3-C', '3-D', '3-S', '2-H']);
    wish(result);
  });
});

describe('suitsFor()', function () {
  it('returns the suit of each cards', function () {
    const result = suitsFor(['2-H', '3-C', '4-D', '5-S', '2-C']);
    wish(deepEqual(result, ['H', 'C', 'D', 'S', 'C']));
  });
});

describe('allTheSameSuit()', function () {
  it('reports true if elements are the same', function () {
    const result = allTheSameSuit(['D', 'D', 'D', 'D', 'D']);
    wish(result);
  });
  it('reports false if elements are not the same', function () {
    const result = allTheSameSuit(['D', 'H', 'D', 'D', 'D']);
    wish(!result);
  });
});

describe('isFlush()', function () {
  it('handles flush', function () {
    const result = isFlush(['2-H', '5-H', '9-H', '7-H', '3-H']);
    wish(result);
  });
});

describe('fourAway()', function () {
  it('reports true if first and last are 4 away', function () {
    const result = fourAway(['2', '6']);
    wish(result);
  });
});

describe('noMultiples()', function () {
  it('reports true when all elements are different', function () {
    const result = noMultiples(['2', '6']);
    wish(result);
  });
  it('reports false when two elements are the same', function () {
    const result = noMultiples(['2', '2']);
    wish(!result);
  });
});

describe('cardsInSequence()', function () {
  it('reports true when elements are in sequence and without multiples', function () {
    const result = cardsInSequence(['1', '2', '3', '4', '5']);
    wish(result);
  });
});

describe('isStraight()', function () {
  it('handles straight', function () {
    const result = isStraight(['1-H', '2-H', '3-H', '4-H', '5-D']);
    wish(result);
  });
});

describe('isStraightFlush()', function () {
  it('handles straight flush', function () {
    const result = isStraightFlush(['1-H', '2-H', '3-H', '4-H', '5-H']);
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
  it('handles two pair', function () {
    const result = checkHand(['2-D', '2-H', '3-H', '3-D', '8-D']);
    wish(result === 'two pair');
  });
  it('handles three of a kind', function () {
    const result = checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']);
    wish(result === 'three of a kind');
  });
  it('handles four of a kind', function () {
    const result = checkHand(['3-H', '3-C', '3-D', '3-S', '2-H']);
    wish(result === 'four of a kind');
  });
  it('handles flush', function () {
    const result = checkHand(['2-H', '5-H', '9-H', '7-H', '3-H']);
    wish(result === 'flush');
  });
  it('handles straight', function () {
    const result = checkHand(['1-H', '2-H', '3-H', '4-H', '5-D']);
    wish(result === 'straight');
  });
  it('handles straight flush', function () {
    const result = checkHand(['1-H', '2-H', '3-H', '4-H', '5-H']);
    wish(result === 'straight flush');
  });
  it('handles full house', function () {
    const result = checkHand(['2-D', '2-H', '3-H', '3-D', '3-C']);
    wish(result === 'full house');
  });
  it('handles high card', function () {
    const result = checkHand(['2-H', '5-C', '9-D', '7-S', '3-H']);
    wish(result === 'high card');
  });
});

/* Untested legacy code

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
