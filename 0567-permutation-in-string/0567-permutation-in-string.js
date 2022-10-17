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
        for (const ch in needs) {
            if (!(window[ch] === needs[ch])) return false;
        }
        return true;
    }
    
    const window = {};
    let valid = 0;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const ch = s2[right];
        
        window[ch] = (window[ch] || 0) + 1;

        if (window[ch] === needs[ch]) valid += 1;
        
        while (right - left + 1 > s1.length) {
            const chLeft = s2[left];
            
            window[chLeft] -= 1;
            if (window[chLeft] === 0) delete window[chLeft];

            left += 1;
        }

        if (isMatching(window, needs)) return true;
    }
    
    return false;
};