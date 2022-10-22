/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const N = s.length;
    const NT = t.length;
    
    if (N < NT) return "";
    
    const needs = {};
    for (const ch of t) {
        needs[ch] = (needs[ch] || 0) + 1;
    }
    
    const isMatching = (window, needs) => {
        for (const key in needs) {
            if (!(needs[key] <= window[key])) return false;
        }
        return true;
    }
    
    
    const window = {};
    let min = Infinity;
    let minValue = "";
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        window[cur] = (window[cur] || 0) + 1;
        
        while (isMatching(window, needs)) {
            const leftCh = s[left];
    
            if (min > right - left + 1) {
                min = right - left + 1;
                minValue = s.slice(left, right + 1);
            }
            
            window[leftCh] -= 1;
            if (window[leftCh] === 0) delete window[leftCh];
            
            left += 1;
        }
    }
    
    return minValue;
};