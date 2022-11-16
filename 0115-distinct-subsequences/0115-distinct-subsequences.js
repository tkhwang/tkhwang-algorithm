/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const NS = s.length;
    const NT = t.length;
    
    const cache = {};
    const genKey = (i, j) => `${i}:${j}`;

    const recursive = (i, j) => {
        const key = genKey(i, j);
        if (i === NS || j === NT) {
            return j === NT;
        }
        if (cache[key] !== undefined) return cache[key];
        
        let res = 0;
        res += recursive(i+1, j)
        if (s[i] === t[j]) {
            res += recursive(i + 1, j+ 1)
        } 
        return cache[key] = res;
    }
    
    return recursive(0, 0)
};