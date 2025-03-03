/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    for (const [ index, word ] of sentence.split(" ").entries()) {
        if (word.startsWith(searchWord)) return index + 1;
    }
    return -1;
};