/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function(s, k) {
    const N = s.length;

    let result = 0;

    for (let left = 0; left < N; left += 1) {
        const window = {};
        let max = 0;
        for (let right = left; right < N; right += 1) {
            const cur = s[right];
            window[cur] = (window[cur] ?? 0) + 1;
            if (max < window[cur]) max = window[cur];
            if (right - left + 1 < k) continue;

            if (k <= max) result += 1;        
        }
    }
    return result;
};