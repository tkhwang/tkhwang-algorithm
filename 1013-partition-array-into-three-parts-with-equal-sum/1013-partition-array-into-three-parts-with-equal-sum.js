/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const N = arr.length;
    
    const total = arr.reduce((a,b) => a + b, 0);

    if (total % 3 !== 0) return false;
    
    let sum = 0;
    let count = 0;
    for (const [ i, num ] of arr.entries()) {
        sum += num;
        if (sum === total / 3) {
            sum = 0;
            count += 1;
        }
    }
    
    return count >= 3;
};