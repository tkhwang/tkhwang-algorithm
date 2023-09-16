/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const N = s.length;
    const NA = 26;
    
    const freq = Array(NA).fill(0);
    
    for (let i = 0; i < N; i += 1) {
        const cur = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        freq[cur] += 1;
    }
    
    freq.sort((a,b) => a - b);
    
    let del = 0;
    
    for (let i = 24; i >= 0; i -= 1) {
        if (freq[i] === 0) break;
        
        if (freq[i] >= freq[i + 1]) {
            let prv = freq[i];
            freq[i] = Math.max(0, freq[i+1] - 1);
            del  += prv - freq[i];
        }
    }
    
    return del;
};