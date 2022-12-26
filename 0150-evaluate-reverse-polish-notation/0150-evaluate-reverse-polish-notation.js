/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    const calc = (operation, first, second) => {
        if (operation === "+") return first + second;
        if (operation === "-") return first - second;
        if (operation === "*") return first * second;
        if (operation === "/") return Math.trunc(first/second);
    }
    
    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(+token)
        } else {
            const second = stack.pop();
            const first = stack.pop();
            
            stack.push(calc(token, first, second))
        }
    }
    
    return stack.reduce((a,b) => a + b, 0);
};