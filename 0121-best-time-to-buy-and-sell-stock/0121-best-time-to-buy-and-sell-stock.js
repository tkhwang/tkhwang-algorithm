/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const N = prices.length;
    
    let min = Infinity;
    let maxProfit = -Infinity;
    
    for (let i = 0; i < N; i += 1) {
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    
    return maxProfit;
};