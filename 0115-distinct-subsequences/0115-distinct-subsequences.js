/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const NS = s.length;
    const NT = t.length;

    // dp[i][j] : s[0...i] t[0...j] maching character number
    const dp = Array(NS + 1).fill(null).map((_) => Array(NT+1).fill(0));
    
    for (let i = 0; i <= NS; i += 1) {
        dp[i][0] = 1;
    }
    
    for (let i = 1; i <= NS; i += 1) {
        for (let j = 1; j <= NT; j += 1) {
            if (s[i-1] === t[j-1]) {
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[NS][NT];
};