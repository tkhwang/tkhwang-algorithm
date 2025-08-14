/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = "";

    for (let i = 0; i <= num.length - 3; i++) {
        const sub = num.substring(i, i + 3);

        // Check if all three chars are the same
        if (sub[0] === sub[1] && sub[1] === sub[2]) {
            if (sub > max) {
                max = sub;
            }
        }
    }

    return max;
};