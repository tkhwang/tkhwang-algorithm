/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const N = nums.length;
    if (N === 1) return nums[0];

    const dp = Array(N).fill(null).map(() => Array(N).fill(-Infinity));
    const MIN = 0;
    const MAX = 1;

    dp[0][MIN] = nums[0];
    dp[0][MAX] = nums[0];

    let max = -Infinity;

    for (let i = 1; i < N; i += 1) {
        dp[i][MIN] = Math.min(
            dp[i-1][MIN] * nums[i],
            dp[i-1][MAX] * nums[i],
            nums[i]
        )
        dp[i][MAX] = Math.max(
            dp[i-1][MIN] * nums[i],
            dp[i-1][MAX] * nums[i],
            nums[i]
        )

        max = Math.max(
            max,
            dp[i][MIN],
            dp[i][MAX]
        )
    }

    return max;
};