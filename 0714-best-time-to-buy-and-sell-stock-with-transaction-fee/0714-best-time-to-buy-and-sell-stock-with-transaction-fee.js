/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const N = prices.length;
    
    let cash = 0;
    let hold = -prices[0];
    
    for (let i = 1; i < N; i += 1) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }
    
    return cash;    
};