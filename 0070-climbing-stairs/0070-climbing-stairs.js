/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const cache = {};
    
    const dfs = (n) => {
        if (n === 1) return 1;
        if (n === 2) return 2;
        if (cache[n] !== undefined) return cache[n];
        
        return cache[n] = dfs(n - 1) + dfs(n - 2);
    }
    
    return dfs(n)
};