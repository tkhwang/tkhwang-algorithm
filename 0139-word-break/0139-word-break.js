/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const cache = {};
    
    const dfs = (remain) => {
        if (!remain) return true;
        if (cache[remain] !== undefined) return cache[remain];
        
        let res = false;
        for (const word of wordDict) {
            if (remain.startsWith(word)) {
                res |= dfs(remain.slice(word.length))
            }
        }
        return cache[remain] = res;
    }
    
    return dfs(s)
};