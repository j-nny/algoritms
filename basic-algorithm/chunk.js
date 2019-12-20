// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let result = [];
  let subArr = [];
  while (arr.length > 0) {
    for (let i = 0; i < size; i++) {
      if (arr.length > 0) {
        subArr.push(arr.shift())
      }
    }
    result.push(subArr)
    subArr = []
  }
  return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
