/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, _s) {
    const obj = {};
    
    const s = _s.split(" ");
    
    if (pattern.length !== s.length) return false;
    
    for (const [ i, ch ] of pattern.split("").entries()) {
        if (obj[ch] === undefined) {
            if (Object.values(obj).includes(s[i])) return false;
            obj[ch] = s[i];
        } else {
            if (obj[ch] !== s[i]) return false;
        }
    }
    
    return true;
};