/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)
var maxSubArray = function(nums) {
  let best = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum = Math.max(nums[i], sum + nums[i]);
    best = Math.max(best, sum);
  }
  return best;
};

var maxSubArray = function(nums) {
  let maxEndingHere = nums[0];
  let maxSofar = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSofar = Math.max(maxSofar, maxEndingHere);
  }
  return maxSofar;
};

// O(n2)
var maxSubArray = function(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i += 1) {
    let sum = 0;
    for (let j = i; j < nums.length; j += 1) {
      sum += nums[j];
      if (max < sum) max = sum;
    }
  }
  return max;
};

// O(n3)
var maxSubArray = function(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i; j < nums.length; j += 1) {
      let sum = 0;
      for (let k = i; k <= j; k += 1) {
        sum += nums[k];
      }
      if (max < sum) max = sum;
    }
  }
  return max;
};
