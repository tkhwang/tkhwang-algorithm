/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 0) return 0;

  let max = -Infinity;
  let count = 1;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] < nums[i]) {
      count += 1;
      if (count > max) max = count;
    } else count = 1;
  }
  return max === -Infinity ? 1 : max;
};
