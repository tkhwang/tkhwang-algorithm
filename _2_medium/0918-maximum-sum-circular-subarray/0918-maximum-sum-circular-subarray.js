/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum = -Infinity, currMax = 0;
    let minSum = Infinity, currMin = 0;
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currMax = Math.max(currMax + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currMax);
        currMin = Math.min(currMin + nums[i], nums[i]);
        minSum = Math.min(minSum, currMin);
        totalSum += nums[i];
    }
    return maxSum > 0 ? Math.max(maxSum, totalSum - minSum) : maxSum;
};  