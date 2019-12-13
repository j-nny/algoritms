function getFinalOpenedDoors(numDoors) {
  let doors = []
  let result = []
  for (let i = 1; i <= numDoors; i++) {
    for (let j = 1; j <= numDoors; j++) {
      if (j % i === 0){
        if (doors[j - 1] === undefined) {
          doors.push('open')
        } else if (doors[j - 1] === 'open') {
          doors.splice(j - 1, 1, 'closed');
        } else if (doors[j - 1] === 'closed') {
          doors.splice(j - 1, 1, 'open');
        }
      }
    }
  }
  for (let k = 0; k < doors.length; k++) {
    if (doors[k] === 'open') {
      result.push(k + 1);
    }
  }
  return result;
}

console.log(getFinalOpenedDoors(100));