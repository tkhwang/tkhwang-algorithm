/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const N = s.length;
    
    const freq = {};
    const maxFreq = (freq) => Math.max(...Object.values(freq));
    let max = -Infinity;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        freq[cur] = (freq[cur] || 0) + 1;
        
        let maxF = maxFreq(freq);
        while (right - left + 1 - maxF > k) {
            freq[s[left]] -= 1;
            if (freq[s[left]] === 0) delete freq[s[left]];
            
            left += 1;
            maxF = maxFreq(freq);
        }
        if (max < right - left + 1) max = right - left + 1;
    }
    return max;
};