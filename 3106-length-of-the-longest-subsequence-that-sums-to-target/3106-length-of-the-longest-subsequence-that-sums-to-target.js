/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function(nums, target) {
    const N = nums.length;

    const dp = Array(N + 1).fill(null).map(() => Array(target + 1).fill(-1));
    dp[0][0] = 0;

    for (let i = 1; i <= N; i += 1) {
        const num = nums[i - 1];

        for (let j = 0; j <= target; j += 1) {
            dp[i][j] = dp[i-1][j];
            
            if (j >= num && dp[i-1][j-num] !== -1) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-num] + 1);
            }
        }
    }

    return dp[N][target];
};