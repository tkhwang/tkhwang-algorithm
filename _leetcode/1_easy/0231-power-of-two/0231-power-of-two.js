/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n >= 2) {
        console.log(n);
        n = n / 2;
    }    
    console.log(n);
    return n === 1;
};