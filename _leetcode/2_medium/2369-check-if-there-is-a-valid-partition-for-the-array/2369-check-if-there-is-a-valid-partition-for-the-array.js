/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    const N = nums.length;
    
    const dp = Array(N).fill(false);
    if (nums[N-2] === nums[N-1]) dp[N-2] = true;
    if (nums[N-3] === nums[N-2] && nums[N-2] === nums[N-1]) dp[N-3] = true;
    if (nums[N-3] + 1 === nums[N-2] && nums[N-2] + 1 === nums[N-1]) dp[N-3] = true;
    
    for (let n = N-4; n >= 0; n -= 1) {
        dp[n] = false
        if (nums[n] === nums[n+1]) dp[n] |= dp[n+2];
        if (nums[n] === nums[n+1] && nums[n+1] === nums[n+2]) dp[n] |= dp[n+3];
        if (nums[n] + 1 === nums[n+1] && nums[n+1] + 1 === nums[n+2]) dp[n] |= dp[n+3];
    }
    
    return dp[0];    
};