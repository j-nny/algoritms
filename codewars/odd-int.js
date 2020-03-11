// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// function findOdd(A) {
//   let counted = {};
//   A.forEach(element => {
//     counted[element] += ` ${element}`
//   })
//   for (let number in counted) {
//     if (counted[number].split(' ').length % 2 === 0) {
//       return Number(number)
//     }
//   }
// }

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([10]))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))