/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const stack = [];
    for (const [i,c] of word.split("").entries()) {
        if (c !== ch) {
            stack.push(c)
        } else {
            stack.push(c);
            const first = stack.reverse().join("");
            return first + word.substring(i + 1);
        }
    }
    return word;
};