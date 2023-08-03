/**
 * @param {number} n
 * @return {number}
 */
var fib = function(N) {
    if (N === 0) return 0;
    if (N === 1) return 1;
    
    const dp = Array(N).fill(0);
    dp[1] = 1;

    for (let i = 2; i <= N; i += 1) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[N];
};