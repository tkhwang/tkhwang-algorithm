/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const N = nums.length;
    
    const deltaK = k % N;
    nums.splice(0, 0, ...nums.splice(N-deltaK, deltaK));
};