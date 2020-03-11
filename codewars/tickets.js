/* The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
*/

function tickets(peopleInLine){
  let bills = {
    '25': 0,
    '50': 0,
    '100': 0,
    change: 'YES'
  }
  peopleInLine.forEach(payment => {
    bills[payment] += 1
    switch(payment - 25) {
      case 25:
        if(bills[25] === 0) {
          bills.change = 'NO'
        }
        bills[25] -= 1
        break;
      case 75:
        if(bills[25] >= 1 && bills[50] >= 1){
          bills[25] -= 1
          bills[50] -= 1
        } else if(bills[25] >= 3){
          bills[25] -= 3
        } else {
          bills.change = 'NO'
        }
        break;
    }
  })
  console.log(bills)
  return bills.change
}

console.log(tickets([25, 25, 50])) // YES
console.log(tickets([25, 100])) // NO
console.log(tickets([25])) // YES
console.log(tickets([50])) // NO
console.log(tickets([100])) // NO
console.log(tickets([25, 25, 50, 50, 100])) // NO
console.log(tickets([25,25,25,100,25,25,50,100,25,25,50,100,25,25,50,100])) // YES
console.log(tickets([ 25, 25, 25, 25, 50, 100, 50 ])) // NO