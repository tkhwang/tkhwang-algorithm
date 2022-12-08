/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const N = Math.min(...strs.map((str) => str.length));

    let i = 0;
    
    while (i < N) {
        for (const str of strs) {
            if (strs[0][i] !== str[i]) return strs[0].slice(0, i);
        }
        i += 1;
    }
    
    return strs[0].slice(0, N);
};