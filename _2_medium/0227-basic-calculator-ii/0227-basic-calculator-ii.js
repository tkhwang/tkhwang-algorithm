/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(_s) {
    const s = _s.replace(/\s/g, "").split("");
    const N = s.length;
    
    const stack = [];
    let n = 0;
    let op = "+";
    
    for (const [i, c] of s.entries()) {
        
        if (!isNaN(c)) {
            n = 10 * n + (c - '0');
        }
        
        if (isNaN(c) || i === N - 1) {
            if (op === "+") {
                stack.push(+n * 1);
            } else if (op === "-") {
                stack.push(+n * -1);
            } else if (op === "*") {
                const pre = stack.pop();
                stack.push(pre * n);
            } else if (op === "/") {
                const pre = stack.pop();
                stack.push(Math.trunc(pre / n));
            }
            op = c;
            n = 0;
        } 
    }
    
    return stack.reduce((a,b) => a + b, 0);
};