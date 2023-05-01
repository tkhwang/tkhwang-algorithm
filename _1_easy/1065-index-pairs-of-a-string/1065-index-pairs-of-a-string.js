/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    const N = text.length;
    const res = [];
    
    for (let i = 0; i < N; i += 1) {
        for (const word of words) {
            const len = word.length;
            if (text.slice(i, i + len) === word) {
                res.push([ i, i + len - 1]);
            }
        }
    }
    
    return res.sort((a,b) => a[0] - b[0] || a[1] - b[1]);
};