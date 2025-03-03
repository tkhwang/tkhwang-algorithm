/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const N = s.length;
    
    const dp = Array(N).fill(null).map((_) => Array(N).fill(0));
    
    for (let i = N - 1; i >= 0; i -= 1) {
        dp[i][i] = 1;
        for (let j = i + 1; j < N; j += 1) {
            dp[i][j] = dp[i][j-1] + 1;
            for (let k = i; k < j; k += 1) {
                if (s[k] === s[j]) {
                    dp[i][j] = Math.min(
                        dp[i][j],
                        dp[i][k] + (k + 1 <= j - 1 ? dp[k+1][j-1] : 0)
                    )
                }
            }
        }
    }
    
    return dp[0][N-1];    
};