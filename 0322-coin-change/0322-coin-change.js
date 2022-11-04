/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const cache = {};
    
    const dp = (amount) => {
        if (amount === 0) return 0;
        if (amount < 0) return -1;
        if (cache[amount] !== undefined) return cache[amount];
        
        let res = Infinity;
        for (const coin of coins) {
            const subProblem = dp(amount - coin);
            if (subProblem === -1) continue;
            
            res = Math.min(res, 1 + subProblem);
        }
        
        res = (res === Infinity) ? -1 : res;
        return cache[amount] = res;
    }
    
    return dp(amount)
};