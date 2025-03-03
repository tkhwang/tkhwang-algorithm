/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    const N = s.length;
    
    let i = 0;
    let count = 0;
    
    if (s[i] === " ") {
        while (i < N && s[i] === " ") {
            i += 1;
        }        
    }
    
    while (i < N) {
        while (i < N && s[i] !== " ") {
            i += 1;
        }
        
        count += 1;
        
        while (i < N && s[i] === " ") {
            i += 1;
        }          
    }
    
    return count;
};