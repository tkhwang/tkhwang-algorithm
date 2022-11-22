/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const N1 = text1.length;
    const N2 = text2.length;
    
    const dp = Array(N1+1).fill(null).map((_) => Array(N2+1).fill(0));
    
    for (let i = 1; i <= N1; i += 1) {
        for (let j = 1; j <= N2; j += 1) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(
                    dp[i][j-1],
                    dp[i-1][j]
                )
            }
        }
    }
    
    return dp[N1][N2];
};