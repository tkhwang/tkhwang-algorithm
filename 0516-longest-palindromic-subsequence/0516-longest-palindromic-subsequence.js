/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const N = s.length;
    
    const dp = Array(N).fill(null).map((_) => Array(N).fill(0));
    for (let i = 0; i < N; i += 1) {
        dp[i][i] = 1;
    }
    
    for (let start = N-2; start >= 0; start -= 1) {
        for (let end = start + 1; end < N; end += 1) {
            if (s[start] === s[end]) {
                dp[start][end] = dp[start + 1][end - 1] + 2;
            } else {
                dp[start][end] = Math.max(
                    dp[start + 1][end],
                    dp[start][end - 1]
                )
            }
        }
    }
    
    return dp[0][N-1];
};