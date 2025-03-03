/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
    const freq = {};
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    let count = 0;
    for (const key in freq) {
        if (freq[key] % 2 === 1) count += 1;
    }
    
    if (count > 1) return [];

    const res = [];
    
    const dfs = (cur, remain) => {
        if (Object.keys(remain).length === 0) {
            res.push(cur);
            return;
        }
        
        const org = cur;
        const orgObj = {...remain};
        
        for (const key in remain) {
            remain[key] -= 2;
            if (remain[key] === 0) delete remain[key];

            dfs(`${key}${cur}${key}`, remain);

            remain[key] = (remain[key] || 0) + 2;
        }
    }
    
    let start = "";
    for (const key in freq) {
        if (freq[key] % 2 === 1) {
            start = key;
            freq[key] -= 1;
            if (freq[key] === 0) delete freq[key];
            break;
        }
    }

    dfs(start, freq);
    
    return res;
};