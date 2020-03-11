/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
*/

function incrementString (string) {
  let letters = string.split('').filter(e => e != Number(e)).join('')
  let nums = Number(string.slice(letters.length)) + 1
  return `${letters}${(letters + nums).length < string.length ? '0'.repeat(string.length - (letters + nums).length) : ''}${nums}`
}

console.log(incrementString("foobar000")) // foobar001
console.log(incrementString("foo")) // foo1
console.log(incrementString("foobar001")) // foobar002
console.log(incrementString("foobar99")) // foobar100
console.log(incrementString("foobar099")) // foobar100
console.log(incrementString("foobar0100")) // foobar0101
console.log(incrementString("")) // 1