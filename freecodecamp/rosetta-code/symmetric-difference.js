// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

function sym(...args) {
  let delta = [];
  let common = [];
  for (let arr of args) {
    arr.sort();
    // removes duplicates in same array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[Number(i) + 1]) {
        arr.splice(i, 1)
        i = 0
      }
    }
    for (let j = 0; j < arr.length; j++) {
      console.log(arr)
      if (delta.includes(arr[j])) {
        delta.splice(delta.indexOf(arr[j]), 1)
        common.push(arr[j])
      } else {
        delta.push(arr[j])
      }
    }
  }
  console.log('common', common)
  return delta;
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
