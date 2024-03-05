/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const N = s.length;
    
    let left = 0;
    let right = N - 1;
    let ch;
    
    while (left < right && s[left] === s[right]) {
        ch = s[left];
        while (left <= right && ch === s[left]) left += 1;
        while (left <= right && ch === s[right]) right -= 1;
    }
    
    return right - left + 1;
};