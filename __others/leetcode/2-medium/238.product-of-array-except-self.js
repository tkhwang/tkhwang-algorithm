/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
  let output = [];
  let leftMul = 1;
  let rightMul = 1;

  // rightMul
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    output[i] = rightMul;
    rightMul *= nums[i];
  }

  // leftMul
  for (let j = 0; j < nums.length; j += 1) {
    output[j] *= leftMul;
    leftMul *= nums[j];
  }

  return output;
};

var productExceptSelf = function(nums) {
  const allProducts = nums.reduce((acc, cur) => (acc *= cur));
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    result.push(allProducts / nums[i]);
  }

  return result;
};

// O(n^2)
var productExceptSelf = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 1) {
    let mul = 1;
    for (let j = 0; j < nums.length; j += 1) {
      if (i !== j) mul *= nums[j];
    }
    result.push(mul);
  }
  return result;
};
