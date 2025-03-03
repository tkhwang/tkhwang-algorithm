/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const N = nums.length;
    
    const dp = Array(N).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < N; i += 1) {
        for (let j = i; j <= Math.min(i + nums[i], N -1); j += 1) {
            dp[j] = Math.min(
                dp[j],
                dp[i] + 1
            )
        }
    }
    
    return dp[N-1]
};