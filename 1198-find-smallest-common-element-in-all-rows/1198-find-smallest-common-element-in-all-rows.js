/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    const N = mat.length;
    const freq = {};
    
    for (const arr of mat) {
        for (const n of arr) {
            freq[n] = (freq[n] || 0) + 1;
        }
    }
    
    for (const key in freq) {
        if (freq[key] === N) return key
    }
    return -1;
};