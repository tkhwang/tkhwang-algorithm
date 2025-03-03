/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let minCost = Infinity;

    let n = prices.length;

    for (let firstChoco = 0; firstChoco < n; firstChoco++) {
        for (let secondChoco = firstChoco + 1; secondChoco < n; secondChoco++) {
            let cost = prices[firstChoco] + prices[secondChoco];

            if (cost < minCost) {
                minCost = cost;
            }
        }
    }

    if (minCost <= money) {
        return money - minCost;
    } else {
        return money;
    }
};