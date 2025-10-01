/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const generateSortedString = (word) => {
        return word.split("").sort().join("");
    }

    return generateSortedString(s) === generateSortedString(t);
};