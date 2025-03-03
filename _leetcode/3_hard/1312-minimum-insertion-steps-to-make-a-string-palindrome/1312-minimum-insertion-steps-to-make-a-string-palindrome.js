/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const N = s.length;
    
    const dp = Array(N).fill(null).map((_) => Array(N).fill(0));
    
    for (let i = N - 2; i >= 0; i -= 1) {
        for (let j = i + 1; j < N; j += 1) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1];
            } else {
                dp[i][j] = Math.min(
                    dp[i+1][j] + 1,
                    dp[i][j-1] + 1
                )
            }
        }
    }
    return dp[0][N-1];
};