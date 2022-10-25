/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    const convert = (word) => word.sort((a,b) => a - b).join("");
    
    return convert(word1) === convert(word2);
};