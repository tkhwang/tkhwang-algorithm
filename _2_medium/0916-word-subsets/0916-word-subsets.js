/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const count = (word) => {
        const res = Array(26).fill(0);
        for (const ch of word) {
            const cur = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            res[cur] += 1;
        }
        return res;
    }
    
    const needs = Array(26).fill(0);
    for (const word of words2) {
        const local = count(word);
        for (let i = 0; i < 26; i += 1) {
            needs[i] = Math.max(needs[i], local[i]);
        }
    }
    
    const res = [];
    for (const word of words1) {
        const local = count(word);
        let isValid = true;
        for (let i = 0; i < 26; i += 1) {
            if (needs[i] <= local[i]) continue;
            isValid = false;
            break;
        }
        if (isValid) res.push(word)
    }
    return res;
};