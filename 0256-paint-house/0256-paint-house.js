/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const N = costs.length;
    
    const red = 0;
    const blue = 1;
    const green = 2;
    
    // dp[i][color] : 해당 color 선택 시 cost
    const dp = Array(N).fill(null).map((_) => Array(3).fill(0));
    for (let c = 0; c < 3; c += 1) {
        dp[0][c] = costs[0][c];
    }
    
    for (let i = 1;i < N; i += 1) {
        dp[i][red] = Math.min(
            dp[i-1][blue] + costs[i][red],
            dp[i-1][green] + costs[i][red]
        );
        dp[i][blue] = Math.min(
            dp[i-1][red] + costs[i][blue],
            dp[i-1][green] + costs[i][blue]
        );
        dp[i][green] = Math.min(
            dp[i-1][red] + costs[i][green],
            dp[i-1][blue] + costs[i][green]
        )
    }
    
    return Math.min(...dp[N-1]);
};