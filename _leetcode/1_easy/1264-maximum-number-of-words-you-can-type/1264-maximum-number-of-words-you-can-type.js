/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const brokens = brokenLetters.split("");
    let count = 0;

    for (const word of text.split(" ")) {
        for (const [ i, ch ] of word.split("").entries()) {
            if (brokens.includes(ch)) break;
            if (i === word.length - 1) count += 1;
        }
    }

    return count;
};