/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;
    
    const dp = Array(N1 + 1).fill(null).map((_) => Array(N2 + 1).fill(0));
    
    for (let c = 0; c <= N2; c += 1) {
        dp[0][c] = c;
    }
    for (let r = 0; r <= N1; r += 1) {
        dp[r][0] = r;
    }
    
    for (let r = 1; r <= N1; r += 1) {
        for (let c = 1; c <= N2; c += 1) {
            if (word1[r-1] === word2[c-1]) {
                dp[r][c] = dp[r-1][c-1]
            } else {
                dp[r][c] = Math.min(
                    1 + dp[r-1][c],
                    1 + dp[r][c-1],
                    1 + dp[r-1][c-1]
                )
            }
        }
    }
    
    return dp[N1][N2]
};