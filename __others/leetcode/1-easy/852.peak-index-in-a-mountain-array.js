/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let peakIndex = 0;
  let peak = 0;

  for (let i = 0; i < A.length - 2; i += 1) {
    if (A[i] < A[i + 1] && A[i + 1] > A[i + 2]) {
      peakIndex = i + 1;
      peak = A[peakIndex];
    }
  }

  return peakIndex;
};
