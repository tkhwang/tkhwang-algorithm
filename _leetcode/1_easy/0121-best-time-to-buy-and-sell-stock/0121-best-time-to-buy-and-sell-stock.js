/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = -Infinity;
    
    for (const price of prices) {
        // buy : minPrice
        minPrice = Math.min(minPrice, price);
        // sell
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
};