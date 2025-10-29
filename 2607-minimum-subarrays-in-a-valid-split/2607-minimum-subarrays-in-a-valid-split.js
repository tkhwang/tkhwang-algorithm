/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarraySplit = function(nums) {
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    const N = nums.length;

    const dp = Array(N + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= N; i += 1) {
        for (let j = 1; j <= i; j += 1) {
            if (gcd(nums[i - 1], nums[j - 1]) > 1) {
                dp[i] = Math.min(
                    dp[i],
                    dp[j-1] + 1
                )
            }
        }
    }
    return dp[N] === Infinity ? -1 : dp[N];
};