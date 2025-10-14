/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const max = nums.length;

    const totalSum = max * (max + 1) / 2;
    const actualSum = nums.reduce((a,b) => a + b, 0);

    return totalSum - actualSum;
};