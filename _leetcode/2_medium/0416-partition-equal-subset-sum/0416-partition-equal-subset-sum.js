/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const N = nums.length;
    const sum = nums.reduce((a,b) => a + b, 0);
    
    if (sum % 2 === 1) return false;
    const W = sum / 2;
    
    // dp[i][w]
    const dp = Array(N + 1).fill(null).map((_) => Array(W + 1).fill(false));
    for (let n = 0; n < N + 1; n += 1) {
        dp[n][0] = true;
    }

    for (let n = 1; n < N + 1; n += 1) {
        for (let w = 1; w < W + 1; w += 1) {
            if (w - nums[n-1] < 0) {
                dp[n][w] = dp[n-1][w];
            } else {
                dp[n][w] = dp[n-1][w] ||
                           dp[n-1][w - nums[n-1]]
            }
        }
    }
    
    return dp[N][W];
};