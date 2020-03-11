function factorialize(num) {
  let result = 1;
  while(num > 0) {
    result *= num;
    num--;
  } return result
}

console.log(factorialize(5)); //120
console.log(factorialize(10)); //3628800
console.log(factorialize(8)); //40320