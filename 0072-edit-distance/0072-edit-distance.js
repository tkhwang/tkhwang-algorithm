/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;
    const cache = {};
    const genKey = (i1, i2) => `${i1}:${i2}`
    
    const dp = (i1, i2) => {
        if (i2 < 0) return i1 + 1;
        if (i1 < 0) return i2 + 1;
        if (cache[genKey(i1, i2)] !== undefined) return cache[genKey(i1, i2)];
        
        if (word1[i1 - 1] === word2[i2 - 1]) {
            cache[genKey(i1, i2)] = dp(i1 - 1, i2 - 1);
        } else {
            cache[genKey(i1, i2)] = Math.min(
                dp(i1-1, i2) + 1,
                dp(i1, i2-1) + 1,
                dp(i1-1, i2-1) + 1
            )
        }
        return cache[genKey(i1, i2)];
    }
    
    return dp(N1, N2);
};
