/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const NS = s.length;
    const NT = t.length;
    
    let is = 0;
    let it = 0;
    
    while (is < NS && it < NT) {
        if (s[is] === t[it]) {
            is += 1;
        } 
        it += 1;
    }
    
    return is === NS;
};