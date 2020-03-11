//Finds all the differences in all given sets of arrays

function sym(...args) {
  let delta = [];
  let common = [];
  for (let arr of args) {
    arr.sort();
    for (let element in arr) {
      if (arr[element] == arr[Number(element) + 1]) {
        arr.splice(element, 1)
      }
      if (common.includes(arr[element])) {
        common.push(arr[element])
      } else if (delta.includes(arr[element])) {
        delta.splice(delta.indexOf(arr[element]), 1)
        common.push(arr[element])
      } else {
        delta.push(arr[element])
      }
    }
  }
  console.log('common', common)
  return delta;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
