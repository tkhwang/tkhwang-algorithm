/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const getCode = (str) => str.charCodeAt(0);
    
    const isBad = (a, b) => a.toLowerCase() === b.toLowerCase()   && a !== b;
    
    const stack = [ "" ];
    for (const ch of s) {
        if (isBad(stack[stack.length - 1], ch)) stack.pop();
        else stack.push(ch)
    }
    return stack.join("");
};