/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (const [ i, ch ] of s.split("").entries()) {
        if (s.indexOf(ch) === s.lastIndexOf(ch)) return i;
    }
    return -1;
};