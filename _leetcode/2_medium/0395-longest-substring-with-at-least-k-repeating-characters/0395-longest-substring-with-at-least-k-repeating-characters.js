/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const N = s.length;

    const freq = {};
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    let max = -Infinity;
    
    for (let left = 0; left < N; left += 1) {
        if (s[left] < k) continue;
        let right = left;
        const localFreq = {};
        while (right < N && freq[s[right]] >= k) {
            localFreq[s[right]] = (localFreq[s[right]] || 0) + 1;
            if (Object.values(localFreq).every((v) => v >= k)) {
                if (max < right - left + 1) max = right - left + 1;
            }
            right += 1;
        }
    }
    return max === -Infinity ? 0 : max;
};