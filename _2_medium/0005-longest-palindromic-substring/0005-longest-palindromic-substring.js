/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;
    
    let max = -Infinity;
    let maxString;
    
    for (let i = 0; i < N; i += 1) {
        
        // Odd
        let [ left, right ] = [ i, i ];
        while (0 <= left && right < N && s[left] === s[right]) {
            const len = right - left + 1;
    
            if (max < len) {
                max = len;
                maxString = s.slice(left, right + 1);
            }
            
            left -= 1;
            right += 1;
        }
        
        // Even
        [ left, right ] = [ i, i + 1 ];
        
        while (0 <= left && right < N && s[left] === s[right]) {
            const len = right - left + 1;
            
            if (max < len) {
                max = len;
                maxString = s.slice(left, right + 1);
            }
            
            left -= 1;
            right += 1;
        }
    }
    
    return maxString;
};