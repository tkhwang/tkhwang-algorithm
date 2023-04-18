/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    // 1-indexed
    const dp = Array(numRows + 1).fill(null).map((_) => []);
    dp[1].push(1);
    
    for (let i = 2; i <= numRows; i += 1) {
        const last = dp[i-1];
        const prv = [ 0, ...last, 0 ];
        for (let j = 0; j < i; j += 1) {
            dp[i].push(prv[j] + prv[j+1] || 0);
        }
    }
    
    return dp.slice(1);
};