/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    const n = capacity.length;
    
    const diff = Array(n).fill(0);
    
    for (let i = 0; i < n; i += 1) {
        diff[i] = capacity[i] > rocks[i] ? capacity[i] - rocks[i] : 0;
    }
    
    diff.sort((a,b) => a - b);
    
    let cnt = 0;
    
    for (let i = 0; i < n && additionalRocks >= 0; i += 1) {
        if (diff[i] === 0) continue;
        
        if (diff[i] <= additionalRocks) {
            additionalRocks -= diff[i];
            
            if (additionalRocks === 0) return i+ 1;
        } else {
            return i;
        }
    }
    
    return n;
};