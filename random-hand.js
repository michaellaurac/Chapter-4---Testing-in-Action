const s = ['H', 'D', 'S', 'C'];
const v = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const c = [];
const rS = function () {
  return s[Math.floor(Math.random() * (s.length))];
};
const rV = function () {
  return v[Math.floor(Math.random() * (v.length))];
};
const rC = function () {
  return rV() + '-' + rS();
};

const doIt = function () {
  c.push(rC());
  c.push(rC());
  c.push(rC());
  c.push(rC());
  c.push(rC());
};
doIt();
console.log(c);
