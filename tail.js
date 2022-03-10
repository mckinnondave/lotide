const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  let newArr = words.slice(1);
  return newArr;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log((tail(words))); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


