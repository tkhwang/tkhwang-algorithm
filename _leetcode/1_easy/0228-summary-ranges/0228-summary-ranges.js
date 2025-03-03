/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let start = nums[0];
  const output = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] + 1 !== nums[i + 1]) {
      output.push(start === nums[i] ? "" + nums[i] : start + "->" + nums[i]);
      start = nums[i + 1];
    }
  }
  return output;
};