/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
    const N = nums.length;

    const dp = Array(N).fill(0);
    const stack = [];
    
    for (let i = N - 1; i >= 0; i -= 1) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            dp[i] = Math.max(dp[i] + 1, dp[stack.pop()])
        }
        stack.push(i);
    }
    
    return Math.max(...dp);
};