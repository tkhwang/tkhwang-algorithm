/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let result = String(num).split("");
    const n = result.length;

    for (let i = 0; i < n; i += 1) {
        if (result[i] === "6") {
            result[i] = "9";
            break;
        }
    }
    return result.join("");
};