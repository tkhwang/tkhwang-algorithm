/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const N = nums.length;
    
    const dp = Array(N).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 0; i < N; i += 1) {
        const steps = nums[i];
        for (let j = 1; j <= steps; j += 1) {
            if (i+j >= N) continue;
            
            dp[i+j] = Math.min(
                dp[i+j],
                dp[i] + 1
            )
        }
    }
    
    return dp[N-1];
};