/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums[0] > target) return 0;
  else if (nums[nums.length - 1] < target) return nums.length;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) return i;
    if (nums[i] < target && nums[i + 1] > target) nums.splice(i + 1, 0, target);
  }
};

// Others
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};
