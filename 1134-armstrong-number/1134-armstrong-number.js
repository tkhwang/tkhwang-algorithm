/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
    const N = String(n).length;
    
    const nums = String(n).split("").map(Number);
    
    return n === nums.map((v) => v ** N).reduce((a,b) => a + b, 0);
};