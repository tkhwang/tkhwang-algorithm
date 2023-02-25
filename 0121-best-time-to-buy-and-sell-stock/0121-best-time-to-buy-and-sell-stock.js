/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = -Infinity;
    
    for (const price of prices) {
        if (minPrice > price) minPrice = price;
        if (maxProfit < price - minPrice) maxProfit = price - minPrice;
    }
    return maxProfit;
};