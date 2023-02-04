/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const N = s2.length;

    const needs = {};
    const window = {};
    for (const ch of s1) {
        needs[ch] = (needs[ch] || 0) + 1;
    }
    
    const isMatching = (window, needs) => {
        if (Object.keys(window).length !== Object.keys(needs).length) return false;
        
        for (const key in needs) {
            if (needs[key] !== window[key]) return false;
        }
        return true;
    }

    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s2[right];
        window[cur] = (window[cur] || 0) + 1;
        
        while (right - left + 1 > s1.length) {
            const leftCh = s2[left];
            window[leftCh] -= 1;
            if (window[leftCh] === 0) delete window[leftCh];
            left += 1;
        }
        
        if (right - left + 1 === s1.length) {
            if (isMatching(window, needs)) return true;
        }
    }
    
    return false;
};