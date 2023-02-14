/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const N1 = text1.length;
    const N2 = text2.length;
    
    const cache = {};
    const genKey = (index1, index2) => `${index1}:${index2}`;

    const dp = (index1, index2) => {
        if (index1 < 0 || index2 < 0) return 0;
        if (cache[genKey(index1, index2)]) return cache[genKey(index1, index2)];
        
        if (text1[index1] === text2[index2]) {
            cache[genKey(index1, index2)] = 1 + dp(index1 - 1, index2 - 1)
        } else {
            cache[genKey(index1, index2)] = Math.max(
                dp(index1 - 1, index2),
                dp(index1, index2 - 1)
            )
        }
        return cache[genKey(index1, index2)];
    }
    
    return dp(N1 - 1, N2 - 1);
};