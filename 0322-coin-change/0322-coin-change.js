/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // dp[i] : money i 일때 교환 가능한 코인의 수
    // dp[amount]
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i < amount + 1; i += 1) {
        for (const coin of coins) {
            if (i - coin < 0) continue;
            
            dp[i] = Math.min(
                dp[i],
                dp[i - coin] + 1
            )
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount]
};