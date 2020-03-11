// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
  let result = []
  let first = str.split('-')
  if (first[0].includes('_')){ first.forEach(element => first = element.split('_')) }
  result.push(first[0])
  first.slice(1).forEach(element => {
    result.push(`${element[0].toUpperCase()}${element.slice(1)}`)
  })
  return result.join('')
}

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))