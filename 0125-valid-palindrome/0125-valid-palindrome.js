/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const N = s.length;
    
    let str = "";
    
    for (const ch of s) {
        if (/[a-zA-Z0-9]/.test(ch)) {
            str += ch.toLowerCase();
        } else {
            continue;
        }
    }
    
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left += 1;
        right -= 1;
    }
    
    return true;
};