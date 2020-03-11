/*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

// function duplicateCount(text){
//   text = text.toLowerCase();
//   let single = []
//   let double = []
//   for (let letter of text) {
//     if (single.includes(letter)) {
//       if (double.includes(letter)) {
//         //do nothing
//       } else {
//         double.push(letter)
//       }
//     } else {
//       single.push(letter)
//     }
//   }
//   return double.length
// }

let duplicateCount = (text) => {
  let count = 0
  let currentLetter = '';
  text = text.toLowerCase().split('').sort()
  forEach(letter => {
    text.indexOf(letter)
  })
}



console.log(duplicateCount('abcde')) //0
console.log(duplicateCount('aabbcde')) //2
console.log(duplicateCount('indivisibility')) //1
console.log(duplicateCount('INDivisibilities')) //2