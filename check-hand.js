function checkHand (hand) {
  if (isPair(hand)) {
    return 'pair';
  } else if (isTriple(hand)) {
    return 'three of a kind';
  } else if (isQuadruple(hand)) {
    return 'four of a kind';
  } else if (isFlush(hand)) {
    return 'flush';
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
  return totalCounts.sort(function(a, b) {
    return b - a;
  })[0];
}

function multiplesIn (hand) {
  return highestCount(valuesFromHand(hand));
}

function isPair (hand) {
  return multiplesIn(hand) === 2;
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

module.exports = { checkHand, valuesFromHand, highestCount, multiplesIn, isPair, isTriple, isQuadruple, suitsFor, allTheSameSuit };
