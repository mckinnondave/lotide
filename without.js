const assertArraysEqual = function(arr1, arr2) {
  let output = ""
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      output = false
      break;
    } 
  }
  if (output === false) {
    console.log(`❌❌❌ The two arrays do NOT match`);
  } else {
    console.log(`✅✅✅ The two arrays DO match!`);
  }
}


const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true
}

const without = function(source, itemsToRemove) {
  let output = []
  for (let i = 0; i < source.length; i++) {
    let matchFound = itemsToRemove.includes(source[i])
    if (matchFound === false) {
      output.push(source[i])
    }
  }
  return output
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without(["1", "2", "3"], [1, 2, "3"])) 