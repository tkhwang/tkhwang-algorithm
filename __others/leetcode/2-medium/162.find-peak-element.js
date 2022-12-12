/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  const peak = {
    index: 0,
    value: nums[0]
  };

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > peak.value) {
      peak.index = i;
      peak.value = nums[i];
    }
  }
  return peak.index;
};
