/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0;
    for (let i = low; i <= high; i += 1) {
        if (i % 2 === 1) count += 1;
    }
    return count;
};