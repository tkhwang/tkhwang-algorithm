/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(_word1, _word2) {
    const word1 = _word1.split("");
    const word2 = _word2.split("");
    
    word1.sort((a,b) => a.localeCompare(b));
    word2.sort((a,b) => a.localeCompare(b));

    if (word1.join("") === word2.join("")) return true;
    
    const freq1 = {};
    const freq2 = {};
    
    for (const ch of word1) {
        freq1[ch] = (freq1[ch] || 0) + 1;
    }
    for (const ch of word2) {
        freq2[ch] = (freq2[ch] || 0) + 1;
    }
    
    const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));
    
    return Object.values(freq1).sort().join("") === Object.values(freq2).sort().join("") &&
           eqSet(new Set(word1), new Set(word2));
};