/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const hash = {};
  const output = new Set();

  for (const value of nums1) {
    if (!hash.hasOwnProperty(value)) {
      hash[value] = value;
    }
  }

  for (const value of nums2) {
    if (hash.hasOwnProperty(value)) {
      output.add(value);
    }
  }

  return Array.from(output);
};
