// const assertArraysEqual = require("./assertArraysEqual")

const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let matchFound = itemsToRemove.includes(source[i]);
    if (matchFound === false) {
      output.push(source[i]);
    }
  }
  return output;
};

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// console.log(without(["1", "2", "3"], [1, 2, "3"]));