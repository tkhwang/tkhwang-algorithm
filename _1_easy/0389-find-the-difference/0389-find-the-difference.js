/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const needs = {};
    for (const ch of s) {
        needs[ch] = (needs[ch] || 0) + 1;
    }
    
    let res = "";
    for (const ch of t) {
        if (needs[ch] !== undefined) {
            needs[ch] -= 1;
            if (needs[ch] === 0) delete needs[ch];
        } else {
            res += ch;
        }
    }
    
    return res;
};