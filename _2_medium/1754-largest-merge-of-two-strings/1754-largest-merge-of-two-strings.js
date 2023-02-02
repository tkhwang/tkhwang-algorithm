/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;
    
    const dfs = (s1, s2) => {
        if (!s1 || !s2) return "" + s1 + s2;
        
        if (s1 >= s2) {
            return s1[0] + dfs(s1.slice(1), s2)
        } else {
            return s2[0] + dfs(s1, s2.slice(1));
        }
    }

    return dfs(word1, word2);
};