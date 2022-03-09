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

const middle = function(arr) {
  let output = []
  let middle = Math.floor(arr.length/2)
  if (arr.length > 2 && arr.length % 2 !== 0) {
    output.push(arr[middle])
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    output.push(arr[middle - 1])
    output.push(arr[middle])
  }
  return output
}

console.log(middle([2, 3]));
console.log(middle([2, 3, 4]));
console.log(middle([2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]))