/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const N = Math.max(word1.length, word2.length);
    
    let res = "";
    for (let i = 0; i < N; i += 1) {
        if (word1[i]) res += word1[i];
        if (word2[i]) res += word2[i];
    }
    return res;
};