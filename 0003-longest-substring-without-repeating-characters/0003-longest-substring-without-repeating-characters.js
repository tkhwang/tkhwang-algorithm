/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const N = s.length;

    const window = {};
    let max = 0;

    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        window[cur] = (window[cur] || 0) + 1;
        
        while (window[cur] > 1) {
            const leftNum = s[left];
            window[leftNum] -= 1;
            if (window[leftNum] === 0) delete window[leftNum];
            left += 1;
        }

        if (max < right - left + 1) max = right - left + 1;
    }
    return max;
};