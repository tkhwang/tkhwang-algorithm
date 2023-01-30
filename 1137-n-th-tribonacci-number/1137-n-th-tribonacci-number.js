/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const cache = {}
    
    const dp = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 1;
        if (cache[n] !== undefined) return cache[n];
        
        return cache[n] = dp(n-1) + dp(n-2) + dp(n-3);
    }
    return dp(n)
};