/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const dp = Array(26).fill(0);
    const MOD = 7 + 10 ** 9;
    
    const arraySum = (dp) => {
        let sum = 0;
        for (let i = 0; i < 26; i += 1) {
            sum += dp[i];
        }
        return sum;
    }
    
    for (const ch of s) {
        const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        let sum = arraySum(dp);
        dp[index] = (sum + 1) % MOD;
    }
    return arraySum(dp) % MOD;
};