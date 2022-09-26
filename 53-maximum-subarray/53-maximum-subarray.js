/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length;
    const dp = Array(n).fill(0)
    dp[0] = nums[0];
    
    let max = -Infinity;
    
    for (let i = 1; i < n; i += 1) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
    }
    
    return Math.max(...dp)
};