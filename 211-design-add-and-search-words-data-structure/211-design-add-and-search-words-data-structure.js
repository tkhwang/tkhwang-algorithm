
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
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (index, trieNode) => {
        let node = trieNode;
        
        for (let i = index; i < word.length; i += 1) {
            const ch = word[i];
            if (ch === ".") {
                for (const key of Object.keys(node)) {
                    if (dfs(i + 1, node[key])) return true;
                }
                return false;
            } else {
                if (node[ch] === undefined) return false;
                node = node[ch];
            }
        }
        return node.isWord === true;
    }
    return dfs(0, this.trie)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */