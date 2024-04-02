/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(_s, _t) {
    const s = _s.split("");
    const t = _t.split("");
    
    const hash = {};
    
    for (const [ i, chS ] of s.entries()) {
        if (hash[chS] === undefined) {
            if (Object.values(hash).includes(t[i])) return false;
            hash[chS] = t[i];
        } else {
            if (hash[chS] !== t[i]) return false;
        }
    }
    return true;
};