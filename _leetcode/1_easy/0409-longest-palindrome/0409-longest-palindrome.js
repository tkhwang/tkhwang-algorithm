/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const set = new Set();
    let count = 0;
    
    for (const ch of s) {
        if (set.has(ch)) {
            set.delete(ch);
            count += 1
        } else {
            set.add(ch)
        }
    }
    
    if (set.size > 0) return 2 * count + 1;
    return 2 * count;
};