/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const N = s.length;
    const stack = [];
    
    for (let i = 0; i < N; i += 1) {
        const cur = s[i];
        
        if ((cur === 'B' && stack.at(-1) === 'A') || 
            (cur === "D" && stack.at(-1) === "C")) {
            stack.pop();
        } else {
            stack.push(cur);
        }
    }
    
    return stack.length;
};