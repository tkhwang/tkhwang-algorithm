/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const N = s.length;

    const dp = Array(N).fill(null).map((_) => Array(N).fill(0));
    for (let r = 0; r < N; r += 1) {
        for (let c = 0; c < N; c += 1) {
            if (r === c) dp[r][c] = 1;
        }
    }
    
    for (let i = N-2; i >= 0; i -= 1) {
        for (let j = i + 1; j < N; j += 1) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2;
            } else {
                dp[i][j] = Math.max(
                    dp[i][j-1],
                    dp[i+1][j]
                )
            }
        }
    }
    
    return dp[0][N-1]
};