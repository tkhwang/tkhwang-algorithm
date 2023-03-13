/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;
    
    let left;
    let right;
    let max = -Infinity;
    let maxValue;
    
    for (let i = 0; i < N; i += 1) {
        // odd
        [ left, right ] = [ i, i ];    
        while (0 <= left && right < N && s[left] == s[right]) {
            if (max < right - left + 1) {
                max = right - left + 1;
                maxValue = [ left, right ];
            }
            left -= 1;
            right += 1;
        }
        
        // even
        [ left, right ] = [ i, i + 1 ];
        while (0 <= left && right < N && s[left] === s[right]) {
            if (max < right - left + 1) {
                max = right - left + 1;
                maxValue = [ left, right ];
            }
            left -= 1;
            right += 1;
        }
    }
    const [ leftMax, rightMax ] = maxValue;
    return s.slice(leftMax, rightMax + 1);
};