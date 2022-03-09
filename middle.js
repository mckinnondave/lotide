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
    console.log(`✅✅✅ The two arrays DO match!`);
  } else {
    console.log(`❌❌❌ The two arrays do NOT match`);
  }
};

const middle = function(arr) {
  let output = [];
  let middle = Math.floor(arr.length / 2);
  if (arr.length > 2 && arr.length % 2 !== 0) {
    output.push(arr[middle]);
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    output.push(arr[middle - 1]);
    output.push(arr[middle]);
  }
  return output;
};

assertArraysEqual(middle([2, 3]), []);
assertArraysEqual(middle([2, 3, 4]), [3]);
assertArraysEqual(middle([2, 3, 4, 5]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);