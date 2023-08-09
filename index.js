function hasTargetSum(array, target) {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
}
  return false;
}

/* 
  O(n^2)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 14, 6, 20, 5], 21));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([11, 7, 33, 14, 5], 18));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 10));

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
