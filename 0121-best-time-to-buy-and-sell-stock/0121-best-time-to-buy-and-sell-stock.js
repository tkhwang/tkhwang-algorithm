/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = -Infinity;
    
    for (const price of prices) {
        if (minPrice > price) {
            minPrice = price
        } else {
            const profit = price - minPrice;
            if (maxProfit < profit) maxProfit = profit;
        }
    }
    
    return maxProfit === -Infinity ? 0 : maxProfit;
};