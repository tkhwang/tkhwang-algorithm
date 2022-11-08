/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(_n) {
    const n = String(_n).split("").map(Number);
    return n.reduce((a,b) => a * b, 1) - n.reduce((a,b) => a + b, 0);
};