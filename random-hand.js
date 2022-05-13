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
const randomSuit = function () {
  return suits[Math.floor(Math.random() * (suits.length))];
};
const randomValue = function () {
  return values[Math.floor(Math.random() * (values.length))];
};
const randomCard = function () {
  return randomValue() + '-' + randomSuit();
};

const randomHand = function () {
  const cards = [];
  const cardArray = buildCardArray();
  cards.push(cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]);
  cards.push(cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]);
  cards.push(cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]);
  cards.push(cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]);
  cards.push(cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]);
  return cards;
};
console.log(randomHand());

module.exports = {
  buildCardArray,
  randomHand,
  randomCard,
  randomValue,
  randomSuit
};
