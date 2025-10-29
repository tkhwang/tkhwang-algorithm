/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let guess = 1;
    while (guess <= n) {
        guess *= 2;
    }

    return guess - 1;
};