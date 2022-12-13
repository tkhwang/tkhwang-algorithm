/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const len = high - low + 1;
    
    if (len % 2 === 0) return Math.floor(len/2);
    
    return (low % 2 === 0) ? Math.floor(len/2) : Math.floor(len/2) + 1;
};