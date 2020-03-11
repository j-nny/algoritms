// Basic JavaScript: Use Recursion to Create a Countdown

function countdown(n) {
  if (n < 1) {
    return []
  } else {
    return [n].concat(countdown(n - 1))
  }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]

// alt solution:
function countdown2(n) {
  if (n < 1) {
    return []
  } else {
    let result = countdown2(n - 1)
    result.unshift(n)
    return result;
  }
}
console.log(countdown2(5)); // [5, 4, 3, 2, 1]