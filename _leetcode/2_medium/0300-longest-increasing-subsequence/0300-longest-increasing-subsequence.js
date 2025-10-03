/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const N = nums.length;

    // dp[i]: maximum increasing subsequence at i
    const dp = Array(N).fill(1);
    dp[0] = 1;
    let max = 1;

    for (let i = 1; i < N; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(
                    dp[i],
                    dp[j] + 1
                )
                if (max < dp[i]) max = dp[i];
            }
        }
    }
    return max;
};