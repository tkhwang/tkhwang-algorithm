/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let i = 0;
    
    let count = 0;
    const mask = 1;
    
    while (i < 32) {
        const one = n & (mask << i);
        if (one) count += 1;
        i += 1;
    }
    
    return count;
};