/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let res = 0;
    let max = 0;

    for (const ch of s) {
        if (ch === "(") {
            res += 1;
        } else if (ch === ")") {
            res -= 1;
        }
        max = Math.max(max, res);
    }

    return max;
};