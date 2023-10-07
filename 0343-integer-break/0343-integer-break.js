/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;

    let count_of_3s = Math.floor(n / 3);
    let remainder = n % 3;

    if (remainder === 0) {
        return 3 ** count_of_3s;
    } else if (remainder === 1) {
        return 3 ** (count_of_3s - 1) * 4;
    } else {
        return 3 ** count_of_3s * 2;
    }    
};