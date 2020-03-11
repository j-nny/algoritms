/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

var subtractProductAndSum = function(n) {
  let nArr = String(n).split('')
  return nArr.reduce((acc, cur) => acc * cur) - nArr.reduce((acc, cur) => Number(acc) + Number(cur))
};

console.log(subtractProductAndSum(234)) // 24 - 9 = 15
console.log(subtractProductAndSum(4421)) // 32 - 11 = 21