/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const N = prices.length;

    let min = Infinity;
    let max = -Infinity;
    for (const [ i, price ] of prices.entries()) {
        if (min > price) min = Math.min(min, price);
        else {
            const profit = price - min;
            max = Math.max(max, profit);
        }
    }
    
    return max === -Infinity ? 0 : max;
};