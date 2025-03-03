/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const together = s + s;
    const N = together.length;
    
    return together.slice(1, 1 + N - 2).indexOf(s) !== -1;
};