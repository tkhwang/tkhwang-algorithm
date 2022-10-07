/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const N = nums.length;
    
    const pop = nums.splice(N-k % N);
    nums.unshift(...pop);
    
    return nums;
};