/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    const trie = {};
    for (const word of words) {
        let node = trie;
        for (const ch of word) {
            if (node[ch] === undefined) node[ch] = {};
            node = node[ch]
        }
        node["word"] = word
    }
    
    const dfs = (word, count = 0) => {
        if (!word) return count > 1;
        
        let node = trie;
        
        for (const [ i, ch ] of word.split("").entries()) {
            if (node[ch] === undefined) return false;
            node = node[ch];
            if (node["word"] === word.slice(0, i + 1)) {
                if(dfs(word.slice(i+1), count + 1)) return true;
            }
        }
        
        return false;
    }
    
    const res = [];
    
    for (const word of words) {
        if (dfs(word)) res.push(word);
    }     
    
    return res;
};