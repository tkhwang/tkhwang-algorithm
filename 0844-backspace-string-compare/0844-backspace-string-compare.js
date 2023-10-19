/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stackS = [];
    const stackT = [];
    
    const generate = (str) => {
        const stack = [];
        for (const ch of str) {
            if (ch === "#") stack.pop();
            else stack.push(ch);
        }
        return stack.join("");
    }
    
    return generate(s) === generate(t);
    
};