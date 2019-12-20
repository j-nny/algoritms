// Remove all falsy values from an array.

function bouncer(arr) {
  let result = []
  for (let element of arr) {
    if (Boolean(element)) {
      result.push(element)
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
