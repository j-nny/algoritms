/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

console.time('timer');

var dailyTemperatures = function(T) {
  let result = [];
  for (let i = 0; i < T.length; i++) {
    count = 1;
    while (T[i] >= T[i + count]) {
      count++
    }
    T[i + count] === undefined ? result.push(0) : result.push(count);
  }
  return result
};


console.timeEnd('timer');

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([73, 73, 73, 73, 73])) // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([73, 72, 71, 70])) // [1, 1, 4, 2, 1, 1, 0, 0]