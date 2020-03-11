/*
There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.

You can return any solution in any order and the same applies for IDs. Also, it is guaranteed that there exists at least one solution. 
*/

var groupThePeople = function(groupSizes) {
  groups = {};
  result = []
  groupSizes.forEach((size) => groups[size] = [])
  groupSizes.forEach((size, i) => (groups[size]).push(i))
  Object.keys(groups).forEach(g => {
    for (i = 0, j = groups[g].length; i < j; i += Number(g)) {
      result.push(groups[g].slice(i, i+Number(g)))
    }
  })
  return result
};

console.log(groupThePeople([3,3,3,3,3,1,3]))
console.log(groupThePeople([2,2,1,1,1,1,1,1]))