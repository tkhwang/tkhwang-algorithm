/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const N = words.length;
    
    const dp = Array(26).fill(0);
    
    for (const word of words) {
        for (const ch of word) {
            const index = ch.charCodeAt('0') - 'a'.charCodeAt('0');
            dp[index] = (dp[index] || 0) + 1
        }
    }
    
    for (let i = 0 ; i < 26; i += 1) {
        if (dp[i] % N !== 0) return false;
    }
    
    return true;
};