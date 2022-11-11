/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const N = s.length;
    
    let r = N - 1;
    
    while (r >= 0 && s[r] === " ") {
        r -= 1;
    }
    
    let start = r;
    
    while (r >= 0 && s[r] !== " ") {
        r -= 1;
    }
    
    let end = r;
    
    return start - end;
};
