/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const chs = s.split("");
    const freq = {};
    for (const ch of chs) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    const keys = Object.keys(freq).sort((a,b) => freq[b] - freq[a]);
    return keys.map((key) => key.repeat(freq[key])).join("");
};