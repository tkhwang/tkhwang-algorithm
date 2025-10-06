/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const N = s.length;

    const window = new Map();
    let max = 0;

    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        window.set(cur, (window.get(cur) ?? 0) + 1);
        
        while (window.get(cur) > 1) {
            const leftNum = s[left];
            window.set(leftNum, window.get(leftNum) - 1);
            left += 1;
        }

        if (max < right - left + 1) max = right - left + 1;
    }
    return max;
};