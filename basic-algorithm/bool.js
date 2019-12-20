// Function checks if parameter is a primitive Boolean value

function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true
  }
  return false
}

console.log(booWho(false));
