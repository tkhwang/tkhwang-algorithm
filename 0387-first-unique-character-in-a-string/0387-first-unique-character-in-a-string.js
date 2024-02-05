/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const N = s.length;
    
    for (let i = 0; i < N; i += 1) {
        const cur = s[i];
        
        const leftIndex = s.indexOf(cur);
        const rightIndex = s.lastIndexOf(cur);
        
        if (leftIndex === rightIndex) return i;
    }
    
    return -1;
};