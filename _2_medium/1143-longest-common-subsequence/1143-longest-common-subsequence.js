/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const n1 = text1.length;
    const n2 = text2.length;
    
    const dp = Array(n1 + 1).fill(null).map((_) => Array(n2+1).fill(0));
    
    for (let i = n1 - 1; i >= 0; i -= 1) {
        for (let j = n2 - 1; j >= 0; j -= 1) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i+1][j+1];
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1]);
            }
        }
    }
    return dp[0][0];
};