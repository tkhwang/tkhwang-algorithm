/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    const freq = {};
    
    for (const array of mat) {
        for (const num of array) {
            freq[num] = (freq[num] || 0) + 1;
        }
    }
    
    for (const key in freq) {
        if (freq[key] === mat.length) return key;
    }
    return -1;
};