/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function process(k) {
        const str = k.split("");
        const stack = [];

        for (const ch of str) {
            if (ch === "#") {
                stack.pop();
            } else {
                stack.push(ch)
            }
        }

        return stack.join("");
    }

    return process(s) === process(t);
};