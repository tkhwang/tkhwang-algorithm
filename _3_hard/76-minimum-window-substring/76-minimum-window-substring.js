/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const N = s.length;
    
    const freq = {};
    for (const ch of t) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    let left = 0;
    
    const isMatching = (freqT, freq) => {
        for (const key of Object.keys(freq)) {
            if (!(freqT[key] && freqT[key] >= freq[key])) return false;
        }
        return true;
    }
    
    let min = Infinity;
    const freqT = {};
    let result = "";
    
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        freqT[cur] = (freqT[cur] || 0) + 1;
        
        while (isMatching(freqT, freq)) {
            if (min > right - left + 1) {
                min = right - left + 1;
                result = s.slice(left, right + 1);
            }
                
            const leftCh = s[left];
            
            freqT[leftCh] -= 1;
            if (freqT[leftCh] === 0) delete freqT[leftCh];
            
            left += 1;
        }
    }
    
    return result;
};