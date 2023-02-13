/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const N = s.length;
    const NP = p.length;
    
    const needs = {};
    for (const ch of p) {
        needs[ch] = (needs[ch] || 0) + 1;
    }
    
    const isMatching = (window, needs) => {
        for (const key in needs) {
            if (needs[key] !== window[key]) return false;
        }
        return true;
    }
    
    const window = {};
    
    const res = [];
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const ch = s[right];
        window[ch] = (window[ch] || 0) + 1;
        
        while (right - left + 1 > NP) {
            const chLeft = s[left];
            window[chLeft] -= 1;
            if (window[chLeft] === 0) delete window[chLeft];
            left += 1;
        }
        
        if (right - left + 1 === NP) {
            if (isMatching(window, needs)) res.push(left);
        }
    }
    
    return res;
};