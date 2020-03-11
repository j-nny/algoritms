/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
  let curItems = [];
  for (let item of arr1) {
    curItems.push(item[1]);
  }
  for (let item of arr2) {
    // adds new stock to items in current inventory
    if (curItems.includes(item[1])){
      arr1[curItems.indexOf(item[1])][0] += item[0]
    } else {
      arr1.push(item)
    }
  }
  arr1.sort((a, b) => {return a[1] > b[1] ? 1 : -1})
  return arr1;
}
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));