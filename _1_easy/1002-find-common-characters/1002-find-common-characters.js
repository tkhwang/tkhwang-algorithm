/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const N = words.length;
    const [ first, ...rest ] = words;
    
    const res = [];
    
    for (const ch of first) {
        const indexes = [];
        for (const word of rest) {
            const index = word.indexOf(ch);
            if (index === -1) break;
            indexes.push(index);
        }
        
        if (indexes.length < N - 1) continue;
        
        for (const [ i, index ] of indexes.entries()) {
            rest[i] = rest[i].slice(0, index) + rest[i].slice(index + 1)
        }
        res.push(ch);
    }
    
    return res;
};