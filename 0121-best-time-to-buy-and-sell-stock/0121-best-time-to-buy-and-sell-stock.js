/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = -Infinity;
    
    for (const price of prices) {
        if (minPrice > price) {
            minPrice = price;
        } else {
            const localProfit = price - minPrice;
            if (maxProfit < localProfit) maxProfit = localProfit;
        }
    }
    
    return maxProfit === -Infinity ? 0 : maxProfit;
};