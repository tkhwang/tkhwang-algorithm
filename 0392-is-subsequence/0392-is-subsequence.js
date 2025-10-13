/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const NS = s.length;
    const NT = t.length;

    let indexS = 0;
    
    for (let indexT = 0; indexT < NT; indexT += 1) {
        if (s[indexS] === t[indexT]) indexS += 1;
    }

    return indexS === NS;
};