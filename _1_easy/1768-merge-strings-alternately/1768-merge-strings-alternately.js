/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = ""
    
    const N1 = word1.length;
    const N2 = word2.length;
    
    let n1 = 0;
    let n2 = 0;
    
    while (n1 < N1 && n2 < N2) {
        res += word1[n1] + word2[n2];
        n1 += 1;
        n2 += 1;
    }

    while (n1 < N1) {
        res += word1[n1];
        n1 += 1;
    }
    while (n2 < N2) {
        res += word2[n2];
        n2 += 1;
    }
    return res;
};