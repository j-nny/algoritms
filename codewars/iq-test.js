/* Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0) 

Returns index of the different number (starts at index 1)*/


// SOLUTION 1:
// function iqTest(numbers){
//   numArr = numbers.split(' ')
//   if ((numArr.filter(num => num % 2 === 0)).length === 1) {
//     return numArr.indexOf(numArr.filter(num => num % 2 === 0)[0]) + 1
//   } else {
//     return numArr.indexOf(numArr.filter(num => num % 2 === 1)[0]) + 1
//   }
// }

//SOLUTION 2:
// function iqTest(numbers){
//   numArr = numbers.split(' ')
//   return (numArr.filter(num => num % 2 === 0)).length === 1 ? numArr.indexOf(numArr.filter(num => num % 2 === 0)[0]) + 1 : numArr.indexOf(numArr.filter(num => num % 2 === 1)[0]) + 1
// }

//MODULARIZED:
let filt = (rem) => {
  return numArr.filter(num => num % 2 === rem)
}

function iqTest(numbers){
  numArr = numbers.split(' ')
  return (filt(0)).length === 1 ? numArr.indexOf(filt(0)[0]) + 1 : numArr.indexOf(filt(1)[0]) + 1
}


console.log(iqTest("2 4 7 8 10")) // 3
console.log(iqTest("1 2 2")) // 1
console.log(iqTest("1 2 1 1")) // 2