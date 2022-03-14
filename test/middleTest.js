const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([2, 3]), []);
assertArraysEqual(middle([2, 3, 4]), [3]);
assertArraysEqual(middle([2, 3, 4, 5]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 4, 5, 6]), [3, 4]); // should fail