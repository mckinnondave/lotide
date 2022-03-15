const findKeyByValue = function(object, value) {
  let arr = Object.keys(object);
  for (const key of arr) {
    if (object[key] === value)
      return key;
  }
};

module.exports = findKeyByValue;