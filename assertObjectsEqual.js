const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} === ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd, cd2);