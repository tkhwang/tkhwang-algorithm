/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a - b);
    
    let count = 0;
    for (const cost of costs) {
        if (coins - cost < 0) return count;
        
        coins -= cost;
        count += 1;
    }
    
    return count;
};