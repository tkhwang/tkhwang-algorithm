/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const N = s.length;

    const stack = [];
    
    for (let i = 0; i < N; i += 1) {
        const ch = s[i];
        
        if (ch === "]") {
            let sub = "";
            while (stack.at(-1) !== "[") {
                sub = stack.pop() + sub;
            }
            stack.pop();
            let num = ""
            while(!isNaN(stack.at(-1))) {
                num = stack.pop() + num;
            }
            stack.push(sub.repeat(num))
        } else {
            stack.push(ch);
        }
    }
    
    return stack.join("");
};