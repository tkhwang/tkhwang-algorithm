/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {

    /*
        a   e  i  o  u (current)    
     a     +1
     e  +1    +1
     i  +1 +1     +1 +1
     o        +1     +1
     u  +1
  (prv)
     */

    const MOD = 7 + 10 ** 9;
    
    const A = 0;
    const E = 1;
    const I = 2;
    const O = 3;
    const U = 4;
    
    // dp[i][character]
    const dp = Array(n + 1).fill(null).map((_) => Array(5).fill(0));
    dp[1][A] = 1;
    dp[1][E] = 1;
    dp[1][I] = 1;
    dp[1][O] = 1;
    dp[1][U] = 1;
    
    for (let i = 2; i <= n; i += 1) {
        dp[i][A] = (dp[i-1][E] + dp[i-1][I] +dp[i-1][U]) % MOD;
        dp[i][E] = (dp[i-1][A] + dp[i-1][I]) % MOD;
        dp[i][I] = (dp[i-1][E] + dp[i-1][O]) % MOD;
        dp[i][O] = (dp[i-1][I]) % MOD;
        dp[i][U] = (dp[i-1][I] + dp[i-1][O]) % MOD;
    }
    
    return dp[n].reduce((a,b) => a + b, 0) % MOD;
};