/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    const diff = capacity.map((v,i) => capacity[i] - rocks[i]);
    
    diff.sort((a,b) => a - b);
    
    const N = diff.length;
    let i = 0;
    let count = 0;
    
    while (i < N && additionalRocks > 0) {
        if (diff[i] > 0) {
            if (diff[i] > additionalRocks) break;
            additionalRocks -= diff[i];
        }
        count += 1;
        i += 1;
    }
    
    return count;
};