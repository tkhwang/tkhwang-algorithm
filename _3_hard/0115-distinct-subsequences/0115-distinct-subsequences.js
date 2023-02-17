/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const NS = s.length;
    const NT = t.length;
    
    // dp[is][it] => s[0:is-1] t[0:it-1]
    const dp = Array(NS + 1).fill(null).map((_) => Array(NT + 1).fill(0));

    for (let is = 0; is <= NS; is += 1) {
        dp[is][0] = 1;
    }
    
    for (let is = 1; is <= NS; is += 1) {
        for (let it = 1; it <= NT; it += 1) {
            if (s[is-1] === t[it-1]) {
                dp[is][it] = dp[is-1][it-1] + dp[is-1][it];
            } else {
                dp[is][it] = dp[is-1][it];
            }
        }
    }
    
    return dp[NS][NT]
};