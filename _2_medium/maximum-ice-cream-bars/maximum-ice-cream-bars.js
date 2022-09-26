/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    const n = costs.length;
    
    costs.sort((a,b) => a - b);
    
    for (const [ i, cost ] of costs.entries()) {
        coins -= cost;
        if (coins < 0) return i
    }
    return n;
};