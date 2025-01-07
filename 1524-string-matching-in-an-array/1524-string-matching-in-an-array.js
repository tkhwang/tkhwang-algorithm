/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const N = words.length;
    const set = new Set();

    for (const checkWord of words) {
        for (const word of words) {
            if (checkWord === word) continue;

            if (word.indexOf(checkWord) !== -1) {
                set.add(checkWord)
            }
        }
    }

    return Array.from(set)    
};