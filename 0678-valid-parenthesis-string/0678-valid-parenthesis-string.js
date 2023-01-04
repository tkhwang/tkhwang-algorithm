/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin = 0;
    let leftMax = 0;
    
    for (const ch of s) {
        if (ch === "(") {
            [leftMin, leftMax] = [leftMin + 1, leftMax + 1]
        } else if (ch === ")") {
            [leftMin, leftMax] = [leftMin - 1, leftMax - 1];
        } else if (ch === "*") {
            [leftMin, leftMax] = [leftMin - 1, leftMax + 1];
        }
        if (leftMax < 0) return false;
        if (leftMin < 0) leftMin = 0;
    }
    return leftMin === 0;
};