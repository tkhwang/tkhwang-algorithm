/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = Array(1+n).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i += 1) {
        dp[i] = dp[i-2] + dp[i -1];
    }
    
    return dp[n];
};