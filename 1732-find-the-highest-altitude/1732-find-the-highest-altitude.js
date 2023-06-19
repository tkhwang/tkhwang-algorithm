/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gains) {
    const N = gains.length;
    
    let cur = 0;
    let max = 0;
    
    for (const gain of gains) {
        cur += gain;
        if (max < cur) max = cur;
    }
    
    return max;
};