/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const N1 = word1.length;
    const N2 = word2.length;

    let i1 = 0;
    let i2 = 0;
    let result = "";

    while (i1 < N1 || i2 < N2) {
        if (i1 < N1) {
            result += word1[i1];
            i1 += 1;
        }
        if (i2 < N2) {
            result += word2[i2];
            i2 += 1;
        }
    }
    
    return result;
};