// Basic JavaScript: Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum) {
    return [endNum];
  } else {
    return [startNum].concat(rangeOfNumbers((startNum + 1), endNum))
  }
};
console.log(rangeOfNumbers(1, 5)) // [ 1, 2, 3, 4, 5 ]
console.log(rangeOfNumbers(6, 9)) // [ 6, 7, 8, 9 ]
console.log(rangeOfNumbers(4, 4)) // [ 4 ]