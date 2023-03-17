
var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.trie;
    for (const ch of word) {
        if (node[ch] === undefined) node[ch]= {};
        node = node[ch];
    }
    node["word"] = word;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.trie;
    for (const ch of word) {
        if (node[ch] === undefined) return false;
        node = node[ch];
    }
    return !!node["word"]
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.trie;
    for (const ch of prefix) {
        if (node[ch] === undefined) return false;
        node = node[ch];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */