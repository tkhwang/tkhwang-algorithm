/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let countForAlternate0 = 0;
    let countForAlternate1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '0') {
                countForAlternate1++;
            } else {
                countForAlternate0++;
            }
        } else {
            if (s[i] === '1') {
                countForAlternate1++;
            } else {
                countForAlternate0++;
            }
        }
    }

    return Math.min(countForAlternate0, countForAlternate1);    
};