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
        
        let res = Infinity;
        if (word1[i-1] === word2[j-1]) {
            res = Math.min(res, dp(i-1, j-1));
        } else {
            res = Math.min(
                res,
                 Math.min(
                    dp(i-1, j) + 1,
                    dp(i, j-1) + 1,
                    dp(i-1,j-1) + 1
                )
            );
        }
        return cache[genKey(i, j)] = res;
    }
    
    return dp(N1, N2)
};