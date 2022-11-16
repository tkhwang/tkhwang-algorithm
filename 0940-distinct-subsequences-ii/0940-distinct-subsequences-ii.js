/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const MOD = 7 + 10 ** 9;
    const end = Array(26).fill(0);
    
    const arraySum = (array) => array.reduce((a,b) => a + b, 0);
    
    for (const ch of s) {
        const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        end[index] = (arraySum(end) + 1) % MOD;
    }
    return arraySum(end) % MOD;
};