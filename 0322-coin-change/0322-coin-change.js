/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i += 1) {
        for (const coin of coins) {
            if (i < coin) {
                continue;
            } else {
                dp[i] = Math.min(
                    // not use
                    dp[i],
                    // use
                    1 + dp[i-coin]
                )
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};