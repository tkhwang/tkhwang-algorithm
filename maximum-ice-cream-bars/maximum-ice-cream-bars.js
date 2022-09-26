/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    const n = costs.length;
    
    costs.sort((a,b) => a - b);
    
    for (let i = 0; i < n && coins >= 0; i += 1) {
        if (costs[i] <= coins) {
            coins -= costs[i];
            if (coins === 0) return i + 1;
        } else {
            return i
        }
    }
    return n;
};