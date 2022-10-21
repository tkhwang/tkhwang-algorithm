/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const N = coins.length;
    const W = amount;

    // dp[c][w] : [1..c] 코인을 사용해서 금액 w 을 만들 수 있는 방법의 수
    const dp = Array(N+1).fill(null).map((_) => Array(W+1).fill(0));
    
    for (let c = 1; c <= N; c += 1) {
        dp[c][0] = 1;
    }
    
    for (let c = 1; c <= N; c += 1) {
        for (let w = 1; w <= W; w += 1) {
            if (w < coins[c-1]) {
                dp[c][w] = dp[c-1][w];
            } else {
                dp[c][w] = dp[c-1][w] + dp[c][w - coins[c-1]];
            }
        }
    }
    
    return dp[N][W];
};