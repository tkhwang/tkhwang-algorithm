/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] > nums[i + 1]) return nums[i + 1];
  }
  return nums[0];
};
