const countLetters = function(str) {
  let object = {};
  str = str.replace(/ /gi, "");
  for (const letter of str) {
    if (object[letter]) {
      object[letter]++;
    } else {
      object[letter] = 1;
    }
  }
  return object;
};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));