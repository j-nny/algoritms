function matchingEnd(str, target) {
  let targetStart = str.length - target.length
  console.log(targetStart)
  for (let i = 0; i < target.length; i++) {
    if (str[i + targetStart] !== target[i]) {
      return false
    }
  }
  return true;
}

console.log(matchingEnd('moon', 'oon'))
console.log(matchingEnd('restrictions apply', 'pply'))
console.log(matchingEnd('restrictions apply', 'apple'))