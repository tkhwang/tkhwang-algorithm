/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alpha = Array(26).fill(0);
    
    for (const ch of sentence) {
        const index = ch.charCodeAt(0) - "a".charCodeAt(0);
        
        alpha[index] += 1;
    }
    
    for (let i = 0; i < 26; i += 1) {
        if (alpha[i] === 0) return false;
    }
    
    return true;
};