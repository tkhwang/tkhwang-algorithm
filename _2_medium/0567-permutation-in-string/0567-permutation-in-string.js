/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const N = s2.length;
    
    const needs = {};
    for (const ch of s1) {
        needs[ch] = (needs[ch] || 0) + 1;
    }
    
    const isMatching = (window, needs) => {
        if (Object.keys(window).length !== Object.keys(needs).length) return false;
        
        const keys = Object.keys(needs);
        return keys.every((key) => window[key] && needs[key] === window[key])
    }
    
    const window = {};
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s2[right];
        window[cur] = (window[cur] || 0) + 1;
        
        while (right - left + 1 > s1.length) {
            const leftNum = s2[left];
            window[leftNum] -= 1;
            if (window[leftNum] === 0) delete window[leftNum];
            left += 1;
        }
        
        if (isMatching(window, needs)) return true;
    }
    
    return false;
};