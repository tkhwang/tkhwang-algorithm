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
        
        let counts = Infinity;
        for (const coin of coins) {
            const sub = dp(n - coin);
            if (sub === -1) continue;
            
            counts = Math.min(counts, 1 + sub);
        }
     
        counts = counts === Infinity ? -1 : counts;
        return cache[n] = counts;
    }
    
    return dp(amount);
};