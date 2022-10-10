/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const N1 = text1.length;
    const N2 = text2.length;
    
    const dp = Array(N1+1).fill(null).map((_) => Array(N2+1).fill(0));
    
    for (let r = 1; r <= N1; r += 1) {
        for (let c = 1; c <= N2; c += 1) {
            if (text1[r-1] === text2[c-1]) {
                dp[r][c] = 1 + dp[r-1][c-1];
            } else {
                dp[r][c] = Math.max(dp[r-1][c], dp[r][c-1]);
            }
        }
    }
    return dp[N1][N2]
};