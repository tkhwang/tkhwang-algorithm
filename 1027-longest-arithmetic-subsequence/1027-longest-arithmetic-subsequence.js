/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const N = nums.length;

    const dp = Array(N+1).fill(2).map((_) => Array(N+1).fill(2));
    let max = 2;
    
    for (let i = 1; i < N; i += 1) {
        for (let j = i + 1; j < N; j += 1) {
            let diff = nums[j] - nums[i];
            for (let k = i-1; 0 <= k; k -= 1) {
                if (nums[i] - nums[k] === diff) {
                    dp[i][j] = Math.max(dp[i][j], dp[k][i] + 1);
                }
            }
            max = Math.max(dp[i][j], max);
        }
    }
    
    return max;
};