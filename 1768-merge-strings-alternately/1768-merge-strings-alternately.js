/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;
    
    let i = 0;
    let j = 0;
    
    let res = "";
    
    while (i < N1 && j < N2) {
        res += word1[i];
        i += 1;
        res += word2[j];
        j += 1;
    }
    
    while (i < N1) {
        res += word1[i];
        i += 1;
    }
    
    while (j < N2) {
        res += word2[j];
        j += 1;
    }

    
    return res;
};