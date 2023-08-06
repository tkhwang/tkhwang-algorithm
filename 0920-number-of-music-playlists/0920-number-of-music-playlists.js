/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(N, goal, k) {
    const MOD = 10**9 + 7;

    const dp = Array(goal + 1).fill(0).map(() => new Array(N + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= goal; i++) {
        for (let j = 1; j <= Math.min(i, N); j++) {
            dp[i][j] = dp[i - 1][j - 1] * (N - j + 1) % MOD;

            if (j > k) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
            }
        }
    }

    return dp[goal][N];  
};