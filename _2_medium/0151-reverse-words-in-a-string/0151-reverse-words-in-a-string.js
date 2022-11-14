/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const stack = [];
    for (const word of s.trim().replace(/  +/g, ' ').split(' ')) {
        stack.push(word);
    }
    
    let res = "";
    while (stack.length) {
        res += stack.pop() + " ";
    }
    
    return res.slice(0, res.length - 1)
};