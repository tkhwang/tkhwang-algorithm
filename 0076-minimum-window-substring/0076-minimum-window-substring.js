/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const N = s.length;
    
    let left = 0;
    let min = Infinity;
    let minSubstring = "";
    
    const needs = {};
    for (const ch of t) {
        needs[ch] = (needs[ch] || 0) + 1;
    }
    
    const window = {};
    
    const isMet = (count) => {
        for (const key in needs) {
            if (!window[key]) return false;
            if (window[key] && window[key] < needs[key]) return false
        }
        return true;
    }
    
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        window[cur] = (window[cur] || 0) + 1;
        
        while(isMet(window)) {
            if (min > right - left + 1) {
                min = right - left + 1;
                minSubstring = s.slice(left, right + 1);
            }
            const leftNum = s[left];
            window[leftNum] -= 1;
            if (window[leftNum] === 0) delete window[leftNum];
            left += 1;
        }
    }
    
    return minSubstring;
};