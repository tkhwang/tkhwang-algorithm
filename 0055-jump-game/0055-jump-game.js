/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const N = nums.length;

    const dp = Array(N).fill(false);
    dp[0] = true;
    
    for (let i = 0; i < N; i += 1) {
        if (!dp[i]) return false;
        for (let j = i; j <= i + nums[i]; j += 1) {
            dp[j] = true;
        }
    }
    return dp[N-1];
};