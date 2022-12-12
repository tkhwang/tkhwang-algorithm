/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    const N = text.length;

    const res = [];
    
    for (const word of words) {
        for (let i = 0; i < N; i += 1) {
            if (text.slice(i, i + word.length) === word) {
                res.push([ i, i + word.length - 1 ])
            }
        }
    }
    
    return res.sort((a,b) => a[0] - b[0] || a[1] - b[1]);
};