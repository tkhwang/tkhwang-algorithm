/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const N = prices.length;

    const stack = [];

    for (const [ index, price ] of prices.entries()) {
        while (stack.length && prices[index] <= prices[stack.at(-1)]) {
            prices[stack.pop()] -= prices[index];
        }
        stack.push(index);
    }

    return prices;
};