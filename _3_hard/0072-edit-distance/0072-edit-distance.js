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
    
    const dp = (i, j) => {
        const key = genKey(i, j);
        
        if (i < 1) return j;
        if (j < 1) return i;
        if (cache[key] !== undefined) return cache[key];
        
        if (word1[i-1] === word2[j-1]) {
            cache[key] = dp(i - 1, j- 1);
        } else {
            cache[key] = Math.min(
                1 + dp(i-1, j),
                1 + dp(i, j-1),
                1 + dp(i-1, j-1)
            )
        }
        return cache[key];
    }
    
    return dp(N1, N2);
};