/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(N, cuts) {
    cuts.sort((a,b) => a - b);
    cuts = [ 0, ...cuts, N ];
    const stickLength = cuts.length;
    
    const dp = Array(stickLength).fill(0).map((_) => Array(stickLength).fill(0)) ;
    
    for (let i = stickLength - 2; i >= 0; i -= 1) {
        for (let j = i + 2; j < stickLength; j += 1) {
            let minCost = Infinity;
            for (let k = i + 1; k < j; k += 1) {
                const cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j];
                minCost = Math.min(minCost, cost);
            }
            
            dp[i][j] = minCost;
        }
    }
    
    return dp[0][stickLength - 1];
};