/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const N = s.length;

    const set = new Set([ 'a', 'e', 'i', 'o', 'u']);
    let count = 0;
    let max = 0;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        if (set.has(cur)) count += 1;
        
        if (right - left + 1 < k) continue;
        if (right - left + 1 > k) {
            const leftNum = s[left];
            if (set.has(leftNum)) count -= 1;
            left += 1;
        }
        if (right - left + 1 === k) {
            if (max < count) max = count;
        }
    }
    
    return max;
};