/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array(m).fill(null).map((_) => Array(n).fill(0));
    
    for (let c = 0; c < n; c += 1) {
        dp[0][c] = 1;
    }
    for (let r = 0; r < m; r += 1) {
        dp[r][0] = 1;
    }
    
    for (let r = 1; r < m; r += 1) {
        for (let c = 1; c < n; c += 1) {
            dp[r][c] = dp[r-1][c] + dp[r][c-1]
        }
    }
    
    return dp[m-1][n-1];
};