/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sorted = [...heights].sort((a,b) => a - b);
    let diff = 0;
    
    for (let i = 0; i < heights.length; i += 1) {
        if (heights[i] !== sorted[i]) diff += 1;
    }
    return diff;
};