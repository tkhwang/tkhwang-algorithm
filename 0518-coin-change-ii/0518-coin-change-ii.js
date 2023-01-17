/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const N = coins.length;

    // dp[n]: money (n) - how many coin 
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    
    for (const coin of coins) {
        for (let i = coin; i <= amount; i += 1) {
            dp[i] += dp[i - coin];
        }
    }
    
    return dp[amount];
};