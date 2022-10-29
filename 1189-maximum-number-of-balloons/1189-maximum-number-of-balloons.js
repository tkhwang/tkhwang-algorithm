/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const freq = {
        "b": 0,
        "a": 0,
        "l": 0,
        "o": 0,
        "n": 0
    }
    
    for (const ch of text) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    return Math.min(
        freq.b,
        freq.a,
        Math.floor(freq["l"]/2),
        Math.floor(freq["o"]/2),
        freq.n
    )
};