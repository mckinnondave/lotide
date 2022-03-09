const eqArrays = function(arr1, arr2) {
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

eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([0, 2, 3], [1, 2, 3])
eqArrays([1, 2, "3"], [1, 2, 3])
eqArrays([1, 2, "3"], [1, 2, "3"])