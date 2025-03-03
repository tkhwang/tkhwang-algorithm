/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const N = s.length;

    let left = -1;
    let right = -1;
    let count = 0;
    
    for (let i = 0; i < N; i += 1) {
        // odd
        [ left, right ] = [ i, i ];
        while (0 <= left && right < N && s[left] === s[right]) {
            count += 1;
            left -= 1;
            right += 1;
        }
        
        // even
        [ left, right ] = [ i, i + 1 ];
        while (0 <= left && right < N && s[left] === s[right]) {
            count += 1;
            left -= 1;
            right += 1;
        }
    }
    
    return count;
};