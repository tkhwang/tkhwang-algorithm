/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    const parens = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    
    for (const ch of s) {
        if (Object.values(parens).includes(ch)) stack.push(ch);
        else if (Object.keys(parens).includes(ch)) {
            const last = stack.pop();
            if (last !== parens[ch]) return false;
        }
    }
    return stack.length === 0;
};