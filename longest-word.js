function findLongestWordLength(str) {
  let longestWord = 0;
  let words = str.split(' ');
  for(let word of words) {
    if(word.length > longestWord){
      longestWord = word.length
    }
  } return longestWord
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));