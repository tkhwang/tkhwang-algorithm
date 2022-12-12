/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let max = -Infinity;

  for (const num of nums) {
    // If there is no greater value.
    if (!set.has(num + 1)) {
      let count = 1;
      while (set.has(num - count)) count += 1;
      max = Math.max(max, count);
    }
  }
  return max;
};
