/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const N = s.length;
    
    const stack = [ -1 ];
    let max = 0;
    
    for (const [ i, ch ] of s.split("").entries()) {
        if (ch === "(") {
            stack.push(i)
        } else {
            stack.pop();
            if (stack.length === 0) stack.push(i);
            else max = Math.max(max, i - stack.at(-1));
        }
    }
    
    return max;
};