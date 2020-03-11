// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  let result = [];
  for (let word of str.toLowerCase().split(' ')) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
