/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const N = s.length;
    
    const dp = Array(N).fill(null).map((_) => Array(N).fill(0));
    
    for (let r = N-2; r >= 0; r -= 1) {
        for (let c = r + 1; c < N; c += 1) {
            if (s[r] === s[c]) {
                dp[r][c] = dp[r+1][c-1];
            } else {
                dp[r][c] = Math.min(
                    dp[r][c-1],
                    dp[r+1][c]
                ) + 1
            }
        }
    }

    return dp[0][N-1];
};