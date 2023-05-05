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
    
    for (let i = 0; i < k - 1; i += 1) {
        if (set.has(s[i])) count += 1;
    }
    
    for (let i = k - 1; i < N; i += 1) {
        if (set.has(s[i])) count += 1;
        
        if (max < count) max = count;
        
        if (set.has(s[i - k + 1])) count -= 1;
    }
    
    return max;
};