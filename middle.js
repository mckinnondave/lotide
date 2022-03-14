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

module.exports = middle;