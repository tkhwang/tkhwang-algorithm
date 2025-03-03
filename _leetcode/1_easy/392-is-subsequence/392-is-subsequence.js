/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s && !t) return true;
    
    const N = s.length;
    const M = t.length;
    
    let i = 0;
    let j = 0;
    while (j < M) {
        if (s[i] === t[j]) {
            i += 1;
        }
        if (i >= N) return true;
        j += 1;
    }
    return false;
};