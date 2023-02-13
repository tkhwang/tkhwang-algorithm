/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const count = (num) => Math.floor((num + 1) / 2);
    
    return count(high) - count(low - 1);
};