/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const N = haystack.length;
    
    for (let i = 0; i < N; i += 1) {
        const needN = needle.length;
        
        if (haystack.slice(i, i + needN) === needle) return i;
    }
    
    return -1;
};