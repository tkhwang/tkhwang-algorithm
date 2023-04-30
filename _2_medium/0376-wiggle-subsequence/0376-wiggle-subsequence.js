/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const N = nums.length;
    
    const dp = Array(N + 1).fill(null).map((_) => Array(2).fill(1));
    const POS = 0;
    const NEG = 1;
    let max = 1;
    
    for (let i = 1; i <= N; i += 1) {
        for (let j = 1; j < i; j += 1) {
            if (nums[j-1] < nums[i-1]) {
                dp[i][POS] = Math.max(
                    dp[i][POS],
                    dp[j][NEG] + 1
                )
            } else if (nums[j-1] > nums[i-1]) {
                dp[i][NEG] = Math.max(
                    dp[i][NEG],
                    dp[j][POS] + 1
                )
            }
            max = Math.max(
                max,
                dp[i][POS],
                dp[i][NEG]
            )
        }
    }
    return max;
};