/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const cache = {};
    
    const dp = (n) => {
        if (n === 1) return 1;
        if (n === 2) return 2;
        if (cache[n] !== undefined) return cache[n];
        
        return cache[n] = dp(n-1) + dp(n-2);
    }
    
    return dp(n)
};