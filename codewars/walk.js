/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
*/

function isValidWalk(walk) {
  let tracker = { ns: 0, ew: 0 }
    walk.forEach(element => {
      if (element === 'n') { tracker.ns += 1 }
      if (element === 's') { tracker.ns -= 1 }
      if (element === 'e') { tracker.ew += 1 }
      if (element === 'w') { tracker.ew -= 1 }
    });
  return (walk.length === 10 && tracker.ns === 0 && tracker.ew === 0) ? true : false;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));