/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    console.log(n, n.toString(2));
    
    let count = 0;
    let mask = 1;
    
    for (let i = 0; i < 32; i += 1) {
        if (n & (mask << i)) count += 1;
    }
    
    return count;
};