/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 1) {
        const r = n % 3;
        if (r !== 0) return false;
        n = n / 3;
    }
    return n === 1 
};