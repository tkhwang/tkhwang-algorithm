/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    const N = text.length;

    const trie = {};
    
    for (const word of words) {
        let node = trie;
        for (const ch of word) {
            if (node[ch] === undefined) node[ch] = {};
            node = node[ch];
        }
        node["word"] = word;
    }
    
    const res = [];

    for (let i = 0; i < N; i += 1) {
        if (trie[text[i]] === undefined) continue;
        
        let j = i;
        let node = trie;
        
        while (j < N) {
            if (node[text[j]] === undefined) break;
            if (node[text[j]]["word"]) {
                res.push([ i, j]);
            }
            node = node[text[j]];
            j += 1;
        }
    }
    
    return res;
};