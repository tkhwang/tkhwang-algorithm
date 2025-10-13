/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const NS = s.length;
    const NT = t.length;

    let indexS = 0;
    let indexT = 0;

    while (indexS < NS && indexT < NT) {
        if (s[indexS] === t[indexT]) indexS += 1;
        indexT += 1;
    }

    return indexS === NS;
};