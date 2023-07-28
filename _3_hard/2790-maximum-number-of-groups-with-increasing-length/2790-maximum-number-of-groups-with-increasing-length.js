/**
 * @param {number[]} usageLimits
 * @return {number}
 */
var maxIncreasingGroups = function(usageLimits) {
    usageLimits.sort((a,b) => a - b);
    
    let k = 0;
    let total = 0;
    for (const usageLimit of usageLimits) {
        total += usageLimit;
        if (total >= (k + 1) * (k + 2) / 2) {
            k += 1;
        }
    }
    
    return k;
};