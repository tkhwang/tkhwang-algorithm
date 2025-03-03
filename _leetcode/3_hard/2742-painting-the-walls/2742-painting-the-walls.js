/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
    const N = cost.length;

    const dp = Array(N + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 0; i < N; i += 1) {
        for (let j = N; j > 0; j -= 1) {
            dp[j] = Math.min(
                dp[j],
                dp[Math.max(j - time[i] - 1, 0)] + cost[i])
        }
    }
    
    return dp[N];    
};