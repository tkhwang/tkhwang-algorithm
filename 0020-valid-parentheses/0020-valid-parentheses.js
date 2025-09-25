/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const chs = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const opens = Object.values(chs);
    const closes = Object.keys(chs);

    for (const ch of s) {
        if (opens.includes(ch)) {
            stack.push(ch)
        } else {
            const saved = stack.pop();
            if (saved !== chs[ch]) return false;
        }
    }

    return stack.length === 0;
};