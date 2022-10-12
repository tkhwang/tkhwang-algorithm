/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const N = s.length;

    const freq = {};
    let left = 0;
    let max = -Infinity;
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        freq[cur] = (freq[cur] || 0) + 1;
        while (freq[cur] > 1) {
            const leftCh = s[left];
            freq[leftCh] -= 1;
            if (freq[leftCh] === 0) delete freq[leftCh];
            
            left += 1;
        }
        if (max < right - left + 1) max = right - left + 1;
    }
    return max === -Infinity ? 0 : max;
};