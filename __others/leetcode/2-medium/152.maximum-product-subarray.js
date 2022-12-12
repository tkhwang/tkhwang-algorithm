/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxSofar = 1,
    minSofar = 1,
    max = -Infinity;

  for (const num of nums) {
    [maxSofar, minSofar] = [
      Math.max(num, num * maxSofar, num * minSofar),
      Math.min(num, num * maxSofar, num * minSofar)
    ];
    max = Math.max(max, maxSofar);
  }
  return max;
};
