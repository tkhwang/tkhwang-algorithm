/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const countS = {};
    for (const ch of s) {
        countS[ch] = (countS[ch] || 0) + 1;
    }
    
    const countT = {};
    for (const ch of t) {
        countT[ch] = (countT[ch] || 0) + 1;
    }
    
    for (const key in countS) {
        if (!(key in countT)) return false;
        if (countS[key] !== countT[key]) return false;
    }
    
    for (const key in countT) {
        if (!(key in countS)) return false;
        if (countS[key] !== countT[key]) return false;
    }
    
    return true;    
};