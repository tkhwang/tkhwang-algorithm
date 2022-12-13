/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const paren = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    const stack = [];
    
    for (const ch of s) {
        // closing
        if (Object.values(paren).includes(ch)) {
            stack.push(ch)
        // opening
        } else {
            const pop = stack.pop();
            if (pop !== paren[ch]) return false;      
        }
    }

    return stack.length === 0;
};