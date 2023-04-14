/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const chs = String(x).split("");
    
    if (chs[0] === "-") return false;

    let left = 0;
    let right = chs.length - 1;
    
    while (left < right) {
        if (chs[left] !== chs[right]) return false;
        left += 1;
        right -= 1;
    }
    
    return true;
};