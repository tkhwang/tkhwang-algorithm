/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(_s) {
    const s = _s.split('');
    
    const obj = {};
    
    for (const ch of s) {
        obj[ch] = (obj[ch] || 0) + 1
    }
    
    const keys = Object.keys(obj);
    keys.sort((a,b) => obj[b] - obj[a]);
    
    return keys.map((key) => key.repeat(obj[key])).join("");
};