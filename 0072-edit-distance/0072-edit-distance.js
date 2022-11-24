/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;
    
    const cache = {};
    const genKey = (i, j) => `${i}:${j}`;
    
    // dp(i, j) => word1[0...i-1] word2[0...j-1]
    const dp = (i, j) => {
        if (i < 1) return j;
        if (j < 1) return i;
        if (cache[genKey(i, j)] !== undefined) return cache[genKey(i, j)];
        
        if (word1[i-1] === word2[j-1]) {
            cache[genKey(i, j)] = dp(i-1, j-1);
        } else {
            cache[genKey(i, j)] = Math.min(
                    dp(i-1, j) + 1,
                    dp(i, j-1) + 1,
                    dp(i-1,j-1) + 1
                )
        }
        return cache[genKey(i, j)];
    }
    
    return dp(N1, N2)
};