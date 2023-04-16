/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let max = 0;
    for (const ch of s) {
        if (ch === "(") {
            depth += 1;
            if (max < depth) max = depth;
        } else if (ch === ")") depth -= 1;
        else continue;
    }    
    return max;
};