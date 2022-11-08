/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const N = s.length;
    const stack = [ "" ];
    
    const isBad = (first, second) => {
        return (first !== first.toUpperCase() && second === first.toUpperCase()) ||
               (first !== first.toLowerCase() && second === first.toLowerCase());
    }
    
    for (const ch of s.split("")) {
        if (isBad(stack[stack.length - 1], ch)) {
           stack.pop();
        } else {
            stack.push(ch);
        }
    }
    
    return stack.join("");
};