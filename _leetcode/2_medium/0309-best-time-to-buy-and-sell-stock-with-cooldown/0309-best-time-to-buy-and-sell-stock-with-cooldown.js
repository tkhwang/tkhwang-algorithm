/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const N = prices.length;
    const cache = {};
    const genKey = (index, buying) => `${index}:${buying}`;
    
    let max = -Infinity;
    
    const bfs = (index, buying) => {
        if (index >= N) return 0;
        if (cache[genKey(index, buying)]) return cache[genKey(index, buying)];
        
        const cooldown = bfs(index + 1, buying);
        
        // buy
        if (buying) {
            const buy = bfs(index + 1, false) - prices[index];
            cache[genKey(index, buying)]  = Math.max(cooldown, buy)    ;
        // sell
        } else {
            const sell = bfs(index + 2, true) + prices[index];
            cache[genKey(index, buying)]  = Math.max(cooldown, sell);
        }
        return cache[genKey(index, buying)];
    }
    
    return bfs(0, true)
};