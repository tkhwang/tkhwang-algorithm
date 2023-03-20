/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    const max = Math.min(a, b);
    
    let res = 0;
    for (let i = 1; i <= max; i += 1) {
        if (a % i === 0 && b % i === 0) res += 1;
    }
    
    return res;
};