/*
Given an array nums of integers, return how many of them contain an even number of digits.
*/

var findNumbers = function(nums) {
  return nums.filter(num => String(num).split('').length % 2 === 0).length
};

console.log(findNumbers([12,345,2,6,7896])) // 2
console.log(findNumbers([555,901,482,1771])) // 1