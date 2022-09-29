/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    
    const dp = Array(n).fill(1);
    
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j <= i; j += 1) {
            if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    
    return Math.max(...dp)
};