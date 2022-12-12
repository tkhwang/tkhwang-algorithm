/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const size = nums.length;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  while (nums.length < size) {
    nums.push(0);
  }
};
