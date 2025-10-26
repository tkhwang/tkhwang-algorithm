/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    const stack = [];
    for (const ch of String(n).split("")) {
        if (ch === "0") continue;
        stack.push(ch);
    }

    return Number(stack.join(""));
};