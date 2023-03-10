/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const N = nums.length;
    
    // dp[i]: ending i. max
    const dp = Array(N).fill(-Infinity);
    dp[0] = nums[0];
    
    let max = nums[0];
    for (let i = 1; i < N; i += 1) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i]);
        if (max < dp[i]) max = dp[i];
    }
    
    return max;
};