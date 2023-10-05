/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const freq = {},
    output = [];

  for (let i = 0; i < nums.length; i += 1) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }

  for (const key in freq) {
    if (freq[key] > nums.length / 3) output.push(key);
  }

  return output;
};
