/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.
*/

var balancedStringSplit = function(s) {
  let count = 0
  let balance = 0
  s.split('').forEach(el => {
    el === "R" ? balance += 1 : balance -= 1
    balance === 0 ? count += 1 : count
  })
  return count
};


console.log(balancedStringSplit("RLRRLLRLRL")) // 4
console.log(balancedStringSplit("RLLLLRRRLR")) // 3
console.log(balancedStringSplit("LLLLRRRR"))   // 1
console.log(balancedStringSplit("RLRRRLLRLL")) // 2