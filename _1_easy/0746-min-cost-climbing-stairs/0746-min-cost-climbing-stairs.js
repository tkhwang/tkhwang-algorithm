/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const N = cost.length;
    const cache = {};
    
    const dp = (n) => {
        if (n <= 1) return 0;
        if (cache[n] !== undefined) return cache[n];
        
        return cache[n] = Math.min(dp(n-2) + cost[n-2], dp(n-1) + cost[n-1])
    }
    
    return dp(N);
};