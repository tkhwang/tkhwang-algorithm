/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    const strNum = String(n).split("").filter((num) => num !== "0").join("");

    const num = Number(strNum);
    const sum = strNum.split("").map(Number).reduce((a,b) => a + b, 0);

    return num * sum;
};