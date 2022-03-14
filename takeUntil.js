// const assertArraysEqual = require("./assertArraysEqual")

const takeUntil = function(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArr.push(array[i]);
    }
    if (callback(array[i])) {
      break;
    }
  }
  return newArr;
};

module.exports = takeUntil

// assertArraysEqual(results1, [1,2,5,7,2]);
// assertArraysEqual(results1, [1,2,5,7,9]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

