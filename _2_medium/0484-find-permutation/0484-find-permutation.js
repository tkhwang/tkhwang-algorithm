/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function(s) {
    const N = s.length;
    
    const res = Array(N + 1);
    const stack = [];
    
    let j = 0;
    for (let i = 1; i < N + 1; i += 1) {
        if (s[i-1] === "I") {
            stack.push(i);
            while (stack.length) {
                res[j] = stack.pop();
                j += 1;
            }
        } else {
            stack.push(i)
        }
    }
    stack.push(N + 1);
    while (stack.length) {
        res[j] = stack.pop();
        j += 1;
    }
    
    return res;
};