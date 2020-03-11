/* #Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case. */

function findMissingLetter(array){
  let ascii = [];
  array.forEach(element => ascii.push(element.charCodeAt()))
  for (let char in ascii) {
    if (ascii[Number(char) + 1] !== ascii[char] + 1) {
      return String.fromCharCode(ascii[char] + 1)
    }
  }
}

console.log(findMissingLetter(["a","b","c","d","f"])) // "e"
console.log(findMissingLetter(["O","Q","R","S"])) // "P"