/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const N = nums.length;

    const dp = Array(N).fill(2);
    let max = -Infinity;

    for (let i = 2; i < N; i += 1) {
        // [i-2, i-1, i]
        if (nums[i-2] + nums[i-1] === nums[i]) {
            dp[i] = dp[i-1] + 1;
        } 
        if (max < dp[i]) max = dp[i];
    }
    return max;
};