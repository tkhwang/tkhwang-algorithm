/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const N = s.length;

    let count = 0;
    
    const expandAroundCorner = (left, right) => {
        while (0 <= left && right < N && s[left] === s[right]) {
            count += 1;
            left -= 1;
            right += 1;
        }
    }

    for (let i = 0; i < N; i += 1) {
        // odd
        expandAroundCorner(i, i);
        // even
        expandAroundCorner(i, i + 1);
    }
    
    return count;
};