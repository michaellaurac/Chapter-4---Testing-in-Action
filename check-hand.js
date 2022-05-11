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

// debugger;
console.log('value of checkHand is ' + checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']));
console.log('value of checkHand is ' + checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']));
