/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    
    let min = Infinity;
    let maxProfit = -Infinity;
    
    for (let i = 0; i < n; i += 1) {
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }    
    return maxProfit;    
};