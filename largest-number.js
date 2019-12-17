function largestOfFour(arr) {
  let result = [];
  for (let subArr of arr) {
    result.push(Math.max(...subArr));
  }
  return result;
}

console.log(largestOfFour([[1, 5, 8, 3], [24, 57, 23, 8], [157, 368, 137, 462], [1001, 136, 958, 130]]));