const suits = ['H', 'D', 'S', 'C'];
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

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
  cards.push(randomCard());
  cards.push(randomCard());
  cards.push(randomCard());
  cards.push(randomCard());
  cards.push(randomCard());
  return cards;
};
console.log(randomHand());

module.exports = {
  randomHand,
  randomCard,
  randomValue,
  randomSuit
};
