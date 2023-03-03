/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const N = haystack.length;
    const NN = needle.length;
    
    for (let i = 0; i < N; i += 1) {
        const word = haystack.slice(i, i + NN);
        if (word === needle) return i;
    }
    
    return -1;
};