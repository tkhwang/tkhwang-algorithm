/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(N) {
    if (N < 2) return 0;

    const dp = new Array(N).fill(true);
    dp[0] = false;
    dp[1] = false;

    for (let i = 2; i * i <= N; i += 1) {
        if (!dp[i]) continue;

        // found prime
        for (let j = i * i; j <= N; j += i) {
            dp[j] = false;
        }
    }

    return dp.filter(Boolean).length;
};