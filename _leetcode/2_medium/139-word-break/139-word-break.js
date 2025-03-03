/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const trie = {};
    for (const word of wordDict) {
        let node = trie;
        for (const ch of word) {
            if (node[ch] === undefined) node[ch] = {};
            node = node[ch];
        }
        node.isWord = true;
        node.wordLength = word.length;
    }
    
    const N = s.length;
    
    const dp = Array(N + 1).fill(false);
    dp[0] = true;
    
    const search = (index, parent = trie) => {
        let node = parent;
        for (let i = index; i < N; i += 1) {
            const cur = s[i];
            
            if (node[cur] === undefined) return;
            
            if (node[cur].isWord) {
                dp[i+1] = true;
            }
            
            node = node[cur];
        }
    }
    
    for (let i = 0; i < N + 1; i += 1) {
        if (!dp[i]) continue;
        
        search(i)
    }
    
    console.log(dp);
    
    return dp[N];
};