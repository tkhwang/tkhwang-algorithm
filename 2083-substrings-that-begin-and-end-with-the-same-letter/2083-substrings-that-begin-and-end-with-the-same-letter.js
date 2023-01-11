/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const freq = {};
    let res = 0;
    
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
        res += freq[ch];
    }
    
    return res;
};