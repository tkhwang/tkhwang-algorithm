/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    const N = heights.length;
    const stack = [];
    
    for (const [ i, height ] of heights.entries()) {
        while (stack.length && heights[stack.at(-1)] <= height) stack.pop();
        stack.push(i)
    }
    
    return stack;
};