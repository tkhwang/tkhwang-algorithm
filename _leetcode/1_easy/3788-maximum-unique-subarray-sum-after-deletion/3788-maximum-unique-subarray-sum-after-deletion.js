/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    const N = nums.length;

    const max = Math.max(...nums);
    if (max < 0) return max;

    return [...new Set(nums)].filter((num) => num > 0).reduce((a,b) => a + b, 0);
};