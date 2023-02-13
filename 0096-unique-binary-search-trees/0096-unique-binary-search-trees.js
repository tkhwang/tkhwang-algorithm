/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(N) {
    const dp = Array(N + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i < N + 1; i += 1) {
        for (let j = 1; j < i + 1; j += 1) {
            dp[i] += dp[j-1] * dp[i-j];
        }
    }
    
    return dp[N];
};