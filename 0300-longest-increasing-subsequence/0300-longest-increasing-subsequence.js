/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const N = nums.length;
    
    const dp = Array(N + 1).fill(1);
    let max = 1;
    for (let i = 1; i < N + 1; i += 1) {
        for (let j = 1; j < i; j += 1) {
            if (nums[j-1] < nums[i-1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                max = Math.max(max, dp[i]);
            }
        }
    }
    return max;
};