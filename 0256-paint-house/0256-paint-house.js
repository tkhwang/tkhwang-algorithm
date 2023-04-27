/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const N = costs.length;
    
    const dp = Array(N).fill(null).map((_) => Array(3).fill(0));
    const RED = 0;
    const BLUE = 1;
    const GREEN = 2;
    
    dp[0][RED] = costs[0][RED];
    dp[0][BLUE] = costs[0][BLUE];
    dp[0][GREEN] = costs[0][GREEN];
    
    for (let i = 1; i < N; i += 1) {
        dp[i][RED] = Math.min(
            dp[i-1][BLUE] + costs[i][RED],
            dp[i-1][GREEN] + costs[i][RED]
        )
        dp[i][BLUE] = Math.min(
            dp[i-1][RED] + costs[i][BLUE],
            dp[i-1][GREEN] + costs[i][BLUE]
        )
        dp[i][GREEN] = Math.min(
            dp[i-1][RED] + costs[i][GREEN],
            dp[i-1][BLUE] + costs[i][GREEN]
        )
    }
    
    return Math.min(...dp[N-1]);
};