/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const NT = target.length;
    const N = words.length;
    const NW = words[0].length;
    const MOD = 7 + 10 ** 9;
    
    const dp = Array(NT + 1).fill(0);
    dp[0] = 1;
    let count = Array(NW).fill(null).map((_) => Array(26).fill(0))      ;
    for (let i = 0; i < NW; i += 1) {
        for (const word of words) {
            const cur = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            count[i][cur] += 1;
        }
    }
    
    for (let i = 0; i < NW; i += 1) {
        for (let j = NT - 1; j >= 0; j -= 1) {
            const cur = target[j].charCodeAt(0) - 'a'.charCodeAt(0);
            dp[j + 1] += dp[j] * count[i][cur];
            dp[j + 1] %= MOD;
        }
    }
    
    return dp[NT];
};