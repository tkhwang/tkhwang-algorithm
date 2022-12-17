/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    const calc = (op, first, second) => {
        if (op === "+") return first + second;
        if (op === "-") return first - second;
        if (op === "*") return first * second;
        if (op === "/") return ~~(first / second);
    }
    
    const stack = [];
    for (const token of tokens) {
        if (isNaN(token)) {
            const second = stack.pop();
            const first = stack.pop();
            stack.push(calc(token, first, second));
        } else {
            stack.push(+token)
        }
    }
    
    return stack.reduce((acc, cur) => acc + cur, 0);
};