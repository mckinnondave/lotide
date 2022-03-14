// const assertArraysEqual = require("./assertArraysEqual")

const letterPositions = function(str) {
  const results = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions


// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [1]);
