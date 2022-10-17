/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const N = s.length;
    
    const window = {};
    let max = -Infinity;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const ch = s[right];
        
        window[ch] = (window[ch] || 0) + 1;
        
        while (window[ch] > 1) {
            const chLeft = s[left];
            
            window[chLeft] -= 1;
            if (window[chLeft] === 0) delete window[chLeft];
            
            left += 1;
        }
        
        max = Math.max(max, right - left + 1);
    }
    
    return max === -Infinity ? 0 : max;
};