/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;

    let left = -1;
    let right = -1;
    let max = -Infinity;
    let maxValue = "";
    for (let i = 0; i < N; i += 1) {
        // odd
        [ left, right ] = [ i, i ];
        while (0 <= left && right < N && s[left] === s[right]) {
            if (max < right - left + 1) {
                max = right - left + 1;
                maxValue = s.slice(left, right + 1);
            }
            left -= 1;
            right += 1;
        }
        
        // even
        [ left, right ] = [ i, i + 1 ];
        while (0 <= left && right < N && s[left] === s[right]) {
            if (max < right - left + 1) {
                max = right - left + 1;
                maxValue = s.slice(left, right + 1);
            }
            left -= 1;
            right += 1;
        }
    }
    return maxValue;
};