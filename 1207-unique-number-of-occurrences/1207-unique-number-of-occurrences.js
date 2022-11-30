/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const N = arr.length;
    const freq = {};
    
    for (const n of arr) {
        freq[n] = (freq[n] || 0) + 1;
    }
    
    const set = new Set();
    
    for (const key of Object.keys(freq)) {
        if (set.has(freq[key])) return false
        else set.add(freq[key]);
    }
    return true;
};