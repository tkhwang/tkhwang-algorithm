/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(_n) {
    const n = String(_n).split("").map(Number);
    
    const product = n.reduce((a,b) => a * b, 1);
    const sum = n .reduce((a,b) => a + b, 0);
    
    return product - sum;
};