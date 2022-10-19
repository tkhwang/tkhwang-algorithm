/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const N = prices.length;
    
    let minPrice = Infinity;
    let maxProfit = -Infinity;
    
    for (let i = 0; i < N; i += 1) {
        if (minPrice > prices[i]) minPrice = prices[i];
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;
};