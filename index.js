function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2) - Quadratic time complexity due to nested loops.
*/

/* 
  Add your pseudocode here
  - Iterate through each element in the array (i)
  - For each element i, iterate through the elements after it (j)
  - If array[i] + array[j] is equal to the target, return true
  - If no such pair is found, return false
*/

/*
  Add written explanation of your solution here
  This function uses a nested loop to check all pairs of elements in the array and see if their sum equals the target. 
  If a pair with the target sum is found, it returns true, indicating that the array has a target sum. 
  If no such pair is found after checking all combinations, it returns false, indicating that the target sum is not possible with the given array elements.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
