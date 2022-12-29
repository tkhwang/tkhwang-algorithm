/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const N = nums.length;
    
    // dp[i]: minimum steps to reach i
    const dp = Array(N).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 0; i < N; i += 1) {
        const cur = dp[i];
        for (let j = i; j <= i + nums[i]; j += 1) {
            dp[j] = Math.min(
                dp[j],
                dp[i] + 1
            )
        }
    }
    return dp[N-1];
};