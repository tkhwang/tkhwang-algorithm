/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const set = new Set();
    let count = 1;
    
    for (const [ i, ch ] of s.split('').entries()) {
        if (set.has(ch)) {
            count += 1;
            set.clear();
        }
        set.add(ch)
    }  
    
    return count;
};