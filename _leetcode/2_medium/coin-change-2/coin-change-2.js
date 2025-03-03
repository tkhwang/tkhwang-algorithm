/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const N = coins.length;
    const W = amount;

    // dp[i번째까지 물건][amount];
    const dp = Array(N + 1).fill(null).map((_) => Array(W+1).fill(0));
    for (let n = 1; n <= N; n += 1) {
        dp[n][0] = 1;
    }
    
    for (let n = 1; n <= N; n += 1) {
        for (let w = 1; w <= W; w += 1) {
            if (w < coins[n-1]) {
                dp[n][w] = dp[n-1][w]
            } else {
                dp[n][w] = dp[n-1][w] + dp[n][w - coins[n-1]]
            }
        }
    }
    return dp[N][W];
};