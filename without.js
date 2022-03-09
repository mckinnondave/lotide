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
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        output.push(source[i])
    }
    } 
  }
  console.log(output);
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);