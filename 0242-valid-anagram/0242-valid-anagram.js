/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(_s, _t) {
    const s = _s.split("");
    const t = _t.split('');

    if (s.length !== t.length) return false;
    
    s.sort();
    t.sort();
    
    const N = s.length;
    
    for (let i = 0; i < N; i += 1) {
        if (s[i] !== t[i]) return false;
    }
    
    return true;
};