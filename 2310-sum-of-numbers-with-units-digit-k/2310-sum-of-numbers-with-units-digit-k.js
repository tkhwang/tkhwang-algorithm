/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
    if (num === 0) return 0;
    
    for (let i = 1; i < 11; i += 1) {
        if (k * i % 10 === num % 10 && i * k <= num) return i;
    }
    
    return -1;
};