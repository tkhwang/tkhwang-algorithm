/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = Array(n + 1).fill(0)  ;
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i += 1) {
        dp[i] = dp[i-2] + dp[i-1];
    }
    
    return dp[n];
};