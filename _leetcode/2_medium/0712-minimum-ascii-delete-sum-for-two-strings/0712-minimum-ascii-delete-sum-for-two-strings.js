/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const N1 = s1.length;
    const N2 = s2.length;
    
    const dp = Array(N1 + 1).fill(null).map((_) => Array(N2 + 1).fill(0));
    for (let i = 1; i <= N1; i += 1) {
        dp[i][0] = dp[i-1][0] + s1[i-1].charCodeAt(0);
    }
    for (let j = 1; j <= N2; j += 1) {
        dp[0][j] = dp[0][j-1] + s2[j-1].charCodeAt(0);
    }
    
    console.log(dp);
    
    for (let i = 1; i <= N1; i += 1) {
        for (let j = 1; j <= N2; j += 1) {
            if (s1[i-1] === s2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(
                    dp[i-1][j] + s1[i-1].charCodeAt(0),
                    dp[i][j-1] + s2[j-1].charCodeAt(0)
                )
            }
        }
    }
    return dp[N1][N2];
};