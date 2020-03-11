// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  for (let letter of arr[1]) {
    if (!arr[0].toLowerCase().includes(letter.toLowerCase())) {
      return false;
    }
  }
  return true;
}

mutation(["Hello", "hey"]);
