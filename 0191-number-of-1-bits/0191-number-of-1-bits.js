/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let i = 0;
    let res = 0;
    const mask = 1;
    
    while (i < 32) {
        if (n & mask << i) res += 1;
        i += 1;
    }
    
    return res;
};