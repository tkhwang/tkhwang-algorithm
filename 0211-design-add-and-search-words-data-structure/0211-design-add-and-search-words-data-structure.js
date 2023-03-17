
var WordDictionary = function() {
    this.trie = {};    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for (const ch of word) {
        if (node[ch] === undefined) node[ch] = {};
        node = node[ch];
    }
    node["word"] = word;
}

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const N = word.length;
    
    const dfs = (index, node) => {
        for (let i = index; i < N; i += 1) {
            const ch = word[i];
            if (ch === ".") {
                for (const key in node) {
                    if (dfs(i + 1, node[key])) return true;
                }
                return false;
            } else {
                if (node[ch] === undefined) return false;
                node = node[ch];
            }
        }
        return !!node["word"];
    }
    
    return dfs(0, this.trie)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */