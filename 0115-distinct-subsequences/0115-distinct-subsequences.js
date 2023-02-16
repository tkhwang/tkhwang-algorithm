/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const NS = s.length;
    const NT = t.length;
    
    const cache = {};
    const genKey = (is, it) => `${is}:${it}`;
    
    const dp = (is, it) => {
        if (it >= NT) return 1;
        if (is >= NS) return 0;
        if (cache[genKey(is, it)] !== undefined) return cache[genKey(is, it)];
        
        let local = 0;
        local += dp(is + 1, it)
        if (s[is] === t[it]) {
            local += dp(is + 1, it + 1);
            
        }
        return cache[genKey(is, it)] = local;
    }
    
    return dp(0, 0)
};