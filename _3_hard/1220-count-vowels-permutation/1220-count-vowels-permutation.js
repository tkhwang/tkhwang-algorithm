/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(N) {
    const res = [];
    
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    
    const A = 0;
    const E = 1;
    const I = 2;
    const O = 3;
    const U = 4;
    
    const dp = Array(N + 1).fill(null).map((_) => Array(5).fill(0));
    dp[1][A] = 1;
    dp[1][E] = 1;
    dp[1][I] = 1;
    dp[1][O] = 1;
    dp[1][U] = 1;
    
    const MOD = 7 + 10 ** 9;
    
    for (let i = 2; i <= N; i += 1) {
        dp[i][A] = ( dp[i-1][E] + dp[i-1][I] + dp[i-1][U] ) % MOD;
        dp[i][E] = ( dp[i-1][A] + dp[i-1][I] ) % MOD;
        dp[i][I] = ( dp[i-1][E] + dp[i-1][O] ) % MOD;
        dp[i][O] = ( dp[i-1][I] ) % MOD;
        dp[i][U] = ( dp[i-1][I] + dp[i-1][O] ) % MOD;
    }
    
    return dp[N].reduce((a,b) => a + b, 0) % MOD;
};