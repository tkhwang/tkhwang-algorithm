/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(nums) {
    const stack = [];
    
    for (const num of nums.split("")) {
        stack.push(num);
    }
    
    while (stack.at(-1) === "0") stack.pop();
    
    return stack.join("");
};