const suits = ['H', 'D', 'S', 'C'];
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const buildCardArray = function () {
  const tempArray = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      tempArray.push(values[i] + '-' + suits[j]);
    }
  }
  return tempArray;
};

const spliceCard = function (cardArray) {
  const takeAway = cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0];
  return [takeAway, cardArray];
};

const randomHand = function () {
  const cards = [];
  let cardArray = buildCardArray();
  [cards[0], cardArray] = spliceCard(cardArray);
  [cards[1], cardArray] = spliceCard(cardArray);
  [cards[2], cardArray] = spliceCard(cardArray);
  [cards[3], cardArray] = spliceCard(cardArray);
  [cards[4], cardArray] = spliceCard(cardArray);
  return cards;
};

module.exports = {
  buildCardArray,
  spliceCard,
  randomHand
};
