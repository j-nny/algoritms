//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// var moveZeros = function (arr) {
//   arr.forEach(element => {
//     if (element === 0){
//       arr.splice(arr.indexOf(0), 1)
//       arr.push(0)
//     }
//   })
//   return arr
// }

const moveZeros = (arr) => {
  return arr.filter(element => element !== 0).concat(arr.filter(element => element === 0))
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a",null]));