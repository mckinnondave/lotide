// const assertEqual = require("./assertEqual")

const findKey = function(object, callback) {
  let result = "";
  for (const key in object) {
    if (callback((object[key]))) {
      result = key;
      break;
    }
    if (!callback((object[key]))) {
      result = "undefined";
    }
  }
  return result;
};

module.exports = findKey;

// let keyFunc = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// let keyFunc2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 5);

// let keyFunc3 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3);


// assertEqual(keyFunc, "noma");
// assertEqual(keyFunc2, "undefined");
// assertEqual(keyFunc3, "Akaleri");