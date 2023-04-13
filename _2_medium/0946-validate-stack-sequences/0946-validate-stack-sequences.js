/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    
    while (pushed.length) {
        if (stack.at(-1) === popped.at(0)) {
            popped.shift();
            stack.pop();
        } else {
            stack.push(pushed.shift());
        }
    }
    
    return pushed.length === 0 && stack.join(":") === popped.reverse().join(":");
};