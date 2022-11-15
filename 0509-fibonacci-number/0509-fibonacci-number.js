/**
 * @param {number} n
 * @return {number}
 */
var fib = function(N) {
    const dp = Array(N+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i = 2; i <= N; i += 1) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    return dp[N];
};