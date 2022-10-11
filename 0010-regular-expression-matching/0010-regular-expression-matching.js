/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const NS = s.length;
    const NP = p.length;
    
    const dp = (s, p) => {
        if (!p) return !s;
        
        const firstMatch = s.length && [s[0], "."].includes(p[0]);
        
        if (p.length >= 2 && p[1] === "*") {
            return dp(s, p.slice(2)) ||
                    firstMatch && dp(s.slice(1), p);
        } else {
            return firstMatch && dp(s.slice(1), p.slice(1));
        }
    }
    
    return dp(s, p);
};