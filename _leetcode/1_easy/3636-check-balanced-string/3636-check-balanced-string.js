/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let evens = 0;
    let odds = 0;

    for (const [ index, value ] of String(num).split('').entries()) {
        if (index % 2 === 0) {
            evens += +value;
        } else {
            odds += +value;
        }
    }

    return evens === odds;
};