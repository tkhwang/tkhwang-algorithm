/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    const NS = s.length;
    const NT = t.length;

    let is = 0;
    let it = 0;
    
    while (is < NS && it < NT) {
        if (s[is] == t[it]) {
            it += 1;
        }
        is += 1;
    }

    return NT - it;
};