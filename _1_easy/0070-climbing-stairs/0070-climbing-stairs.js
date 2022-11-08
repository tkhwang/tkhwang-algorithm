/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(N) {
    const dp = Array(N+1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= N; i += 1) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[N];
};