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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([0, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, "3"]);