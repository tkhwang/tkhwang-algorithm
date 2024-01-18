/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const count = {};
    
    for (const num of arr) {
        count[num] = (count[num] || 0) + 1
    }
    
    const keys = Object.keys(count);
    const counts = Object.values(count);
    
    return [...new Set(keys)].length === [...new Set(counts)].length;
};