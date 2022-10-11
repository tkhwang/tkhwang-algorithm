/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const N1 = text1.length;
    const N2 = text2.length;
    
    const cache = {};
    const genKey = (a, b) => `${a}:${b}`;
    
    const dp = (len1, len2) => {
        if (len1 < 0 || len2 < 0) return 0;
        if (cache[genKey(len1, len2)] !== undefined) return cache[genKey(len1, len2)];
        
        if (text1[len1] === text2[len2]) {
            cache[genKey(len1, len2)] =  1 + dp(len1 -1, len2 -1);
        } else {
            cache[genKey(len1, len2)] = Math.max(dp(len1-1, len2), dp(len1, len2-1));
        }
        return cache[genKey(len1, len2)];
    }
    
    return dp(N1-1, N2-1)
};