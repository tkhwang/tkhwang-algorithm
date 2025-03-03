/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(_s) {
    const s = _s.split("");
    const N = s.length;
    
    const ch2index = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);
    
    let left = 0;
    let right = N - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            const indexLeft = ch2index(s[left]);
            const indexRight = ch2index(s[right]);
            
            if (indexLeft <= indexRight) {
                s[right] = s[left];
            } else {
                s[left] = s[right];
            }
        }
        left += 1;
        right -= 1;
    }
    
    return s.join("");
};