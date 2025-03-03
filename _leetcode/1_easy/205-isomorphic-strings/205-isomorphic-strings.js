/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(_s, _t) {
    const map = new Map();
    
    const s = _s.split("");
    const t = _t.split("");
    
    for (const [i, ch] of s.entries()) {
        if (!map.has(ch)) {
            if (Array.from(map.values()).includes(t[i])) return false;
            map.set(ch, t[i]);
        } else {
            if (map.get(ch) !== t[i]) return false;
        }
    }
    return true;
};