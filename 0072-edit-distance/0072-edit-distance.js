/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;
    
    const cache = {};
    const genKey = (a, b) => `${a}:${b}`;
    
    const dp = (len1, len2) => {
        if (len1 < 0) return len2 + 1;
        if (len2 < 0) return len1 + 1;
        if (cache[genKey(len1, len2)] !== undefined) return cache[genKey(len1, len2)];
        
        if (word1[len1] === word2[len2]) {
            cache[genKey(len1, len2)] = dp(len1 -1, len2 - 1);
        } else {
            cache[genKey(len1, len2)] = Math.min(
                1 + dp(len1 - 1, len2),
                1 + dp(len1, len2 - 1),
                1 + dp(len1-1, len2 - 1)
            )
        }
        return cache[genKey(len1, len2)];
    }
    
    return dp(N1-1, N2-1)
};