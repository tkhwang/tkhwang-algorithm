/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const cache = {};
    
    const dp = (n) => {
        if (n === 0) return 0;
        if (n < 0) return -1;
        if (cache[n] !== undefined) return cache[n];
        
        let res = Infinity;
        for (const coin of coins) {
            const sub = dp(n - coin);
            if (sub === -1) continue;
            
            res = Math.min(res, sub + 1);
        }
        return cache[n] = (res === Infinity) ? -1 : res;
    }
    
    return dp(amount)
};