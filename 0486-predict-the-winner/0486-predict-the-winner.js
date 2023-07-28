/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const N = nums.length;
 
    const dp = Array(N).fill(null).map((_) => Array(N).fill(0));

    for (let left = N; left >= 0; left -= 1) {
        for (let right = left; right < N; right += 1) {
            if (left === right) {
                dp[left][right] = nums[left];
            } else {
                const a = nums[left] - dp[left + 1][right];
                const b = nums[right] - dp[left][right - 1];
                dp[left][right] = Math.max(a, b);
            }
        }
    }
    
    return dp[0][N - 1] >= 0;
};