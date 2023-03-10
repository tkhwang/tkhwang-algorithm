/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const cache = {};
    
    const dp = (remain) => {
        if (remain < 0) return -1;
        if (remain === 0) return 0;
        if (cache[remain] !== undefined) return cache[remain];
        
        let min = Infinity;
        for (const coin of coins) {
            if (remain - coin < 0) continue;
            
            const res = dp(remain - coin);
            if (res === -1) continue;
            min = Math.min(min, 1 + res);
        }
        return cache[remain] = min === Infinity ? -1 : min;
    }
    
    return dp(amount)
};