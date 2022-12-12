/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const missing = [];
  const numsSorted = nums.sort((a, b) => a - b);
  console.log("TCL: findDisappearedNumbers -> numsSorted", numsSorted);

  for (let i = 0; i < numsSorted.length; i += 1) {
    if (numsSorted[i + 1] !== numsSorted[i] && numsSorted[i + 1] !== numsSorted[i] + 1) missing.push(numsSorted[i] + 1);
  }
  return missing;
};

var findDisappearedNumbers = function(nums) {
  const offset = nums.length;
  const output = [];

  for (let i = 0; i < nums.length; i += 1) {
    nums[(nums[i] - 1) % offset] += offset;
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] <= offset) output.push(i + 1);
  }
  return output;
};
