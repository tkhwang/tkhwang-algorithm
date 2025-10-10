/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    const N = energy.length;

    const dp = Array(N + 1) .fill(0);
    dp[N-1] = energy[N-1];

    let max = -Infinity;

    for (let i = N- 1; i >= 0; i -= 1) {
        dp[i] = (dp[i+k] ?? 0) + energy[i]
        if (max < dp[i]) max = dp[i];
    }

    return max;
};