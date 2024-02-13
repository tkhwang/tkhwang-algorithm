/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const isPalindromic = (word) => {
        return word === word.split("").reverse().join("");
    }
    for (const word of words) {
        if (isPalindromic(word)) return word;
    }
    return "";
};