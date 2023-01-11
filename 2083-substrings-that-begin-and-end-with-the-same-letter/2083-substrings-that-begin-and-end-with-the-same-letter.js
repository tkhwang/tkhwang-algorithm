/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const obj = {};
    for (const [ i, ch ] of s.split("").entries()) {
        if (obj[ch] === undefined) obj[ch] = [];
        obj[ch].push(i);
    }
    
    let res = 0;
    
    for (const ch in obj) {
        const len = obj[ch].length;
        res += len * (len + 1) / 2;
    }
    
    return res;
};