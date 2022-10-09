/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const N = s.length;
    
    const needs = {};
    for (const ch of t) {
        needs[ch] = (needs[ch] || 0) + 1;
    }
    
    const isMatching = (freqT, needs) => {
        for (const key of Object.keys(needs)) {
            if (!(freqT[key] && freqT[key] >= needs[key])) return false;
        }
        return true;
    }
    
    let min = Infinity;
    const window = {};
    let result = "";
    let left = 0;
    
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        window[cur] = (window[cur] || 0) + 1;
        
        while (isMatching(window, needs)) {
            if (min > right - left + 1) {
                min = right - left + 1;
                result = s.slice(left, right + 1);
            }
                
            const leftCh = s[left];
            
            window[leftCh] -= 1;
            if (window[leftCh] === 0) delete window[leftCh];
            
            left += 1;
        }
    }
    
    return result;
};