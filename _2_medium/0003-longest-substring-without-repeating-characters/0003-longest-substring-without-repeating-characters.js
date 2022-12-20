/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const N = s.length;
    
    const freq = {};
    let max = -Infinity;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        freq[cur] = (freq[cur] || 0) + 1;
        while (freq[cur] > 1) {
            const leftNum = s[left];
            freq[leftNum] -= 1;
            left += 1;
        }
        if (max < right - left + 1) max = right - left + 1;    
    }
    return max === -Infinity ? 0 : max;
};