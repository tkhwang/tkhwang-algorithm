/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];

    for (const ch of s) {
        if (stack.length === 0) {
            stack.push(ch)
        } else {
            const previous = stack.at(-1);
            if (previous === ch) stack.pop();
            else stack.push(ch)
        }
    }

    return stack.join("");
};