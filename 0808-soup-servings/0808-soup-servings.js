/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(N) {
    if (N >= 5000) return 1;
    
    const dfs = (A, B, memo = {}) => {
        if (A <= 0 && B <= 0) return 0.5;
        if (A <= 0) return 1;
        if (B <= 0) return 0;
        
        const key = `${A}:${B}`;
        
        if (memo[key] !== undefined) return memo[key];
        
        const r = 0.25 * (
            dfs(A-100, B, memo) +
            dfs(A-75, B-25, memo) +
            dfs(A-50, B-50, memo) +
            dfs(A-25, B-75, memo)
        )
        
        return memo[key] = r;
    }
    
    return dfs(N, N)
};