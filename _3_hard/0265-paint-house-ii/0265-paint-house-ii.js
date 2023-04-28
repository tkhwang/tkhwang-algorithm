/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    const N = costs.length;
    const NW = costs[0].length;
    
    const dp = Array(N).fill(null).map((_) => Array(NW).fill(0));
    for (let i = 0; i < NW; i += 1) {
        dp[0][i] = costs[0][i];
    }
    
    for (let i = 1; i < N; i += 1) {
        for (let j = 0; j < NW; j += 1) {
            let min = Infinity;
            for (let k = 0; k < NW; k += 1) {
                if (j === k) continue;
                const cur = dp[i-1][k] + costs[i][j];
                if (min > cur) min = cur;
            }
            dp[i][j] = min;
        }
    }
    
    return Math.min(...dp[N-1]);
};