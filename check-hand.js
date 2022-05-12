function checkHand (hand) {
  if (isTwoPair(hand)) {
    return 'two pair';
  } else if (isPair(hand)) {
    return 'pair';
  } else if (isFullHouse(hand)) {
    return 'full house';
  } else if (isTriple(hand)) {
    return 'three of a kind';
  } else if (isQuadruple(hand)) {
    return 'four of a kind';
  } else if (isStraightFlush(hand)) {
    return 'straight flush';
  } else if (isFlush(hand)) {
    return 'flush';
  } else if (isStraight(hand)) {
    return 'straight';
  } else {
    return 'high card';
  }
};

function valuesFromHand (hand) {
  return hand.map(function (card) {
    return card.split('-')[0];
  });
}

function highestCount (values) {
  const counts = [];
  values.forEach(function (value, index) {
    counts[value] = 0;
    if (value === values[0]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[1]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[2]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[3]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[4]) {
      counts[value] = counts[value] + 1;
    }
  });
  const totalCounts = Object.keys(counts).map(function (key) {
    return counts[key];
  });
  return totalCounts.sort(function (a, b) {
    return b - a;
  })[0];
}

function allCounts (values) {
  const counts = [];
  values.forEach(function (value, index) {
    counts[value] = 0;
    if (value === values[0]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[1]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[2]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[3]) {
      counts[value] = counts[value] + 1;
    }
    if (value === values[4]) {
      counts[value] = counts[value] + 1;
    }
  });
  const totalCounts = Object.keys(counts).map(function (key) {
    return counts[key];
  });
  return totalCounts.sort(function (a, b) {
    return b - a;
  });
}

function multiplesIn (hand) {
  return highestCount(valuesFromHand(hand));
}

function isTwoPair (hand) {
  const theCounts = allCounts(valuesFromHand(hand));
  return (theCounts[0] === 2 && theCounts[1] === 2);
}

function isPair (hand) {
  return multiplesIn(hand) === 2;
}

function isFullHouse (hand) {
  const theCounts = allCounts(valuesFromHand(hand));
  return (theCounts[0] === 3 && theCounts[1] === 2);
}

function isTriple (hand) {
  return multiplesIn(hand) === 3;
}

function isQuadruple (hand) {
  return multiplesIn(hand) === 4;
}

function suitsFor (hand) {
  return hand.map(function (card) {
    return card.split('-')[1];
  });
}

function allTheSameSuit (suits) {
  let toReturn = true;
  suits.forEach(function (suit) {
    if (suit !== suits[0]) {
      toReturn = false;
    }
  });
  return toReturn;
}

function isFlush (hand) {
  return allTheSameSuit(suitsFor(hand));
}

function fourAway (values) {
  return ((+values[values.length - 1] - 4 - +values[0]) === 0);
}

function noMultiples (values) {
  return highestCount(values) === 1;
}

function cardsInSequence (values) {
  const sortedValues = values.sort();
  return fourAway(sortedValues) && noMultiples(values);
}

function isStraight (hand) {
  return cardsInSequence(valuesFromHand(hand));
}

function isStraightFlush (hand) {
  return isStraight(hand) && isFlush(hand);
}

module.exports = {
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
};
