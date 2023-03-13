/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;
    
    // dp[i][j] : word1[0:i-1] word2[0:j-1]
    const dp = Array(N1 + 1).fill(null).map((_) => Array(N2 + 1).fill(0));
    for (let i = 1; i <= N1; i += 1) {
        dp[i][0] = i
    }
    for (let j = 1; j <= N2; j += 1) {
        dp[0][j] = j;
    }
    
    for (let i = 1; i <= N1; i += 1) {
        for (let j = 1; j <= N2; j += 1) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(
                    dp[i-1][j],
                    dp[i][j-1]
                ) + 1
            }
        }
    }
    
    return dp[N1][N2];
};