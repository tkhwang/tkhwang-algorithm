/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = {};
    for (const ch of s.split("")) {
        freq[ch] = (freq[ch] || 0) + 1
    }
    
    console.log(freq);
    
    const keys = Object.keys(freq);
    
    return keys
        .sort((a,b) => freq[b] - freq[a])
        .map((key) => key.repeat(freq[key]))
        .join('');
};