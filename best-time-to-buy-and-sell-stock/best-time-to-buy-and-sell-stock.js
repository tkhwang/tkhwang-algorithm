/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const N = prices.length;

    let min = Infinity;
    let max = -Infinity;

    for (const price of prices) {
        if (min > price) {
            min = price;
        } else {
            max = Math.max(max, price - min);
        }
    }
    
    return max === -Infinity ? 0 : max;
};