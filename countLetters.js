const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let object = {};
  str = str.replace(/ /gi, "")
  for (const letter of str) {
    if (object[letter]) {
      object[letter]++
    } else {
      object[letter] = 1
    }
  }
  return object
}

console.log(countLetters("lighthouse in the house"))