/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    
    if (isNegative) x *= -1;
    
    let N = x;
    let num = 0;
    
    while (N > 0) {
        const digit = N % 10;
        num = num * 10 + digit;
        N = Math.floor(N/10);
    }
    
    if (num < 2**31 * -1 || num > 2 ** 31 - 1) return 0;
    
    return isNegative ? -num : num;
};