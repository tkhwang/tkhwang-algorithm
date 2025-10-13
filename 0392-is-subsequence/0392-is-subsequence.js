/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const NS = s.length;
    const NT = t.length;

    let indexT = 0;

    for (let indexS = 0; indexS < NS; indexS += 1) {
        while (indexT < NT && t[indexT] !== s[indexS]) indexT += 1;

        if (indexT === NT) return false;

        indexT += 1;
    }

    return true;
};