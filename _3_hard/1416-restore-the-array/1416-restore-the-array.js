/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
    const N = s.length;
    const MOD = 7 + 10 ** 9;
    
    const dp = Array(N).fill(0);
    dp[N] = 1;
    
    for (let i = N - 1; i >= 0; i -= 1) {
        if (s[i] === "0") continue;
        for (let j = i; j < N; j += 1) {
            let no = Number(s.substring(i, j + 1));
            if (no > k) break;
            dp[i] += dp[j + 1];
            dp[i] %= MOD;
        }
    }
    return dp[0];    
};