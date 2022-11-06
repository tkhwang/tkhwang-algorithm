/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    const N = s.length;
    
    if (k >= 2) {
        return s.split("").sort().join("");
    }
    
    let best = s;
    
    for (let i = 0; i < N; i += 1) {
        const cur = s.slice(i) + s.slice(0, i);
        if (best > cur) {
            best = cur;
        }
    }
    
    return best;
};