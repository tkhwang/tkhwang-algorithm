/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, D) {
    const N = jobDifficulty.length;
    
    if (N < D) return -1;
    let max;
    
    const dp = Array(N+1).fill(Infinity);
    dp[N] = 0;
    
    for (let d = 1; d <= D; d += 1) {
        for (let i = 0; i <= N - d; i += 1) {
            max = 0;
            dp[i] = Infinity;
            
            for (let j = i; j <= N - d; j += 1) {
                max = Math.max(max, jobDifficulty[j]);
                dp[i] = Math.min(dp[i], max + dp[j + 1]);
            }
        }
    }
    
    return dp[0];
};