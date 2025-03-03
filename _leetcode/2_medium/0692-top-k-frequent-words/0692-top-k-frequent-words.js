/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freq = {};
    for (const word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }
    
    const keys = Object.keys(freq);
    keys.sort((a,b) => freq[b] - freq[a] || a.localeCompare(b));
    
    return keys.slice(0, k);
};