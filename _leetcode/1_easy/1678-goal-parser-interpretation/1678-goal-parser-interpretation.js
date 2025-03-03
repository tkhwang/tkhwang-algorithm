/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const stack = [];
    for (const ch of command) {
        if (ch === ")") {
            let saved = "";
            while(stack.at(-1) !== "(") {
                saved = stack.pop() + saved;
            }
            stack.pop();
            if (saved.length === 0) stack.push("o");
            if (saved.length === 2) stack.push("al");
        } else {
            stack.push(ch)
        }
    }
    return stack.join("");
};