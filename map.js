const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${(arr1)} === ${(arr2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${(arr1)} !== ${(arr2)}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => {
  return word[1];
});
const original = [1,2,3,4,5];
const testCase3 = map(original, num => num % 2 === 0);


assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["r", "o", "o", "a", "o"]);
assertArraysEqual(testCase3, [false, true, false, true, false]);

//to confirm original array wasn't changed with testCase3
assertArraysEqual(original, [1,2,3,4,5]);